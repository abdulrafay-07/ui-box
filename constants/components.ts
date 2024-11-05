import { LayoutDashboard, Slash, User } from "lucide-react";

const dashboardLink = "/dashboard";
const miscLink = "/misc";
const userLink = "/user";

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
      collapsibleName: "User",
      collapsibleIcon: User,
      designs: [
         {
            name: "Advanced Search Bar",
            href: `${userLink}/advanced-search-bar`,
         },
         {
            name: "File Upload Zone",
            href: `${userLink}/file-upload-zone`,
         },
      ],
      
   },
];