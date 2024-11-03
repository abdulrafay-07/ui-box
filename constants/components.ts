import { LayoutDashboard, Slash } from "lucide-react";

const dashboardLink = "/dashboard";
const miscLink = "/misc";

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
   {
      collapsibleName: "Misc",
      collapsibleIcon: Slash,
      designs: [
         {
            name: "File Upload Zone",
            href: `${miscLink}/file-upload-zone`,
         },
      ],
   },
];