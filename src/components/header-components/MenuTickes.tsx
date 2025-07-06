"use client"

import React from 'react';

type MenuTicketsProps = {
    open: boolean;
    onToggle: () => void;
    opening: number;
    closed: number;
    pending: number;
    urgent: number;
}


export default function MenuTickets({ opening, closed, pending, urgent, onToggle, open }: MenuTicketsProps) {
    return (
        <div className="relative">
            <button
                className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 font-medium"
                type="button"
                onClick={onToggle}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Tickets
                <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-blue-500 rounded-lg shadow-xl z-50 py-2">
                    <ul className="space-y-1">
                        <li>
                            <button className="w-full text-left px-4 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Tickets Abertos
                                <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{opening}</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center gap-3">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                Tickets Fechados
                                <span className="ml-auto bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{closed}</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center gap-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                Tickets Pendentes
                                <span className="ml-auto bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">{pending}</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                Tickets Urgentes
                                <span className="ml-auto bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">{urgent}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}