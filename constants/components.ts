import { LayoutDashboard } from "lucide-react";

const dashboardLink = "/dashboard";

export const components = [
   {
      collapsibleName: "Dashboard",
      collapsibleIcon: LayoutDashboard,
      designs: [
         {
            name: "Dashboard 1",
            href: `${dashboardLink}/1`,
         },
      ],
   },
];