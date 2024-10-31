import { LayoutDashboard } from "lucide-react";

const dashboardLink = "/dashboard";

export const components = [
   {
      collapsibleName: "Dashboard",
      collapsibleIcon: LayoutDashboard,
      designs: [
         {
            name: "Simple Dashboard",
            href: `${dashboardLink}/simple`,
         },
         {
            name: "E-commerce Dashboard",
            href: `${dashboardLink}/e-commerce`,
         },
      ],
   },
];