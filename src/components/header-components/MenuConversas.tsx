import React from "react";


type MenuConversasProps = {
    open: boolean;
    onToggle: () => void;
    ativas: number;
    pendentes: number;
}

export default function MenuConversas({ativas, pendentes, onToggle, open}: MenuConversasProps) {

    return (
        <>
        <div className="relative">
        <button
            className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 font-medium"
            type="button"
            onClick={onToggle}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                </svg>
                Conversas
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
                                    Conversas Ativas
                                    <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">5</span>
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    Conversas Pendentes
                                    <span className="ml-auto bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">3</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
        </div>
        </>
    )
}