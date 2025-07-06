"use client"
import React, { useEffect } from "react";
import MenuTickets from "./header-components/MenuTickes";
import MenuConversas from "./header-components/MenuConversas";

type Tickets = {
    opening: number;
    closed: number;
    pending: number;
    urgent: number;
}

type Conversas = {
    ativas: number;
    pendentes: number;
}

export default function Header() {
    const [tickets, setTickets] = React.useState<Tickets>({} as Tickets);
    const [conversas, setConversas] = React.useState<Conversas>({ ativas: 0, pendentes: 0 });
    const [loading, setLoading] = React.useState<boolean>(true);
    const [onScreen, setOnScreen] = React.useState<'tickets' | 'conversas' | null>(null);

    const toggleOnScreen = (menu: 'tickets' | 'conversas') => {
        setOnScreen(prev => (prev === menu ? null : menu));
    }

    // TODO: Transformar em um hook
    //       para evitar repetição de código

    useEffect(() => {
        async function fetchTickets() {
            try {
                const response = await fetch("http://localhost:3000/api/tickets-count");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setTickets(data);
            } catch (error) {
                console.error("Failed to fetch tickets:", error);
            }
        finally {
            setLoading(false);
        }
    }
        async function fetchConversas() {
            try {
                const response = await fetch("http://localhost:3000/api/conversas-count");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setConversas(data);
            } catch (error) {
                console.error("Failed to fetch conversas:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchTickets();
        fetchConversas();
    }, []);

    if (loading) {
        return <div className="text-white">Carregando...</div>;
    }

  return (
    <>
    <header className="flex items-center p-4 bg-[#0a0a0a] text-white">
      <h1 className="text-2xl font-bold">Atlas Help Desk</h1>
      <nav className="px-auto ml-auto flex-grow">
        <ul className="flex space-x-4 px-15">
          <MenuTickets {...tickets} 
          onToggle={() => toggleOnScreen('tickets')}
          open={onScreen === 'tickets'}/>
          <MenuConversas {...conversas}
          onToggle={() => toggleOnScreen('conversas')}
          open={onScreen === 'conversas'}/>
        </ul>
      </nav>
    </header>
    </> 
    );
}