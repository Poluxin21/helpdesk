import React from 'react'
import './globals.css'
import Header from '@/components/header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Atlas Help Desk</title>
        <meta
          name="description"
          content="Portfólio de desenvolvedor Full Stack especializado em C++ e C#"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
        <Header/>
        <div className="gradient-bg fixed top-0 left-0 w-full h-full z-[-1]" />
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  )
}