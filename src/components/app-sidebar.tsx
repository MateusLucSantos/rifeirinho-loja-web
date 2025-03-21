import {
  ClipboardPenLine,
  Headset,
  Layers,
  MonitorCog,
  ShoppingBasket,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// import Logo from "@/assets/adaptive-icon.svg";
// This is sample data.
const data = {
  user: {
    name: "Mateus Santos",
    email: "mateuslucas.ita@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Rifeirinho",
      // logo: Logo,
      plan: "Loja",
    },
  ],
  navMain: [
    {
      title: "Cadastros",
      url: "#",
      icon: ClipboardPenLine,
      isActive: true,
      items: [
        {
          title: "Clientes",
          url: "/clients",
        },
        {
          title: "Fornecedores",
          url: "#",
        },
        {
          title: "Produtos",
          url: "#",
        },
      ],
    },
    {
      title: "Gestão de Estoque",
      url: "#",
      icon: Layers,
      items: [
        {
          title: "Movimentos de Estoque",
          url: "#",
        },
      ],
    },
    {
      title: "Compras",
      url: "#",
      icon: ShoppingBasket,
      items: [
        {
          title: "Compra",
          url: "#",
        },
        {
          title: "Devoluções de Compras",
          url: "#",
        },
      ],
    },
    {
      title: "Vendas",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Vendas",
          url: "#",
        },
        {
          title: "Devoluções",
          url: "#",
        },
      ],
    },
    {
      title: "Financeiro",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Contas a Pagar",
          url: "#",
        },
        {
          title: "Contas a Receber",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Suporte",
      url: "#",
      icon: Headset,
    },
    {
      name: "Configurações",
      url: "#",
      icon: MonitorCog,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-chart-4/80">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-chart-4/80">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <NavProjects projects={data.projects} />

      <SidebarFooter className="bg-chart-4/80">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
