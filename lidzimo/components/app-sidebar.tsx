"use client"

import * as React from "react"
import {

  BookOpen,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {

  navMain: [
    {
      title: "1 Fundamentos.",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "1.1 Saudações e Cumprimentos",
          url: "#",
        },
        {
          title: "1.2 Apresentações",
          url: "#",
        },
        {
          title: "1.3 Frases de Sobrevivência",
          url: "#",
        },
        {
          title: "1.4 Números e Cores",
          url: "#",
        },
      ],
    },
    {
      title: "2 Noções de Gramática.",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "2.1 Artigos e Substantivos.",
          url: "#",
        },
        {
          title: "2.2 Género e Número",
          url: "#",
        },
        {
          title: "2.3. Verbos no Presente do Indicativo.",
          url: "#",
        },
        {
          title: "2.4. Pronomes Pessoais:",
          url: "3",
        },
      ],
    },
    {
      title: "3. Construindo Frases",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "3.1 Verbos: Passados comuns",
          url: "#",
        },
        {
          title: "3.2 Verbos: Futuro",
          url: "#",
        },
        {
          title: "3.3 Pronomes de Objeto Direto e Indireto ",
          url: "#",
        },
        {
          title: "3.4 Advérbios de Frequência e Modo",
          url: "#",
        },
      ],
    },
    {
      title: "info",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Lidzimi",
          url: "#",
        },
        {
          title: "Contribuidores",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (

    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>

      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-1 flex-col text-amber-700 text-bold gap-4 px-3">
        <NavMain  items={data.navMain} />
        </div>
      </SidebarContent>
      <SidebarFooter>

      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
