import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  // const { isMobile } = useSidebar();
  return (
    <SidebarGroup className="bogroup-data-[collapsible=icon]:hidden bg-chart-4/80">
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name} className="">
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
