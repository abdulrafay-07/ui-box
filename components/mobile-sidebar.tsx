"use client"

import { useState } from "react";

import { Sidebar } from "@/components/sidebar";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   return (
      <div className="md:hidden">
         <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild className="m-4">
               <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
               <SheetDescription className="sr-only">
                  Sidebar navigation for mobile devices
               </SheetDescription>
               <Sidebar />
            </SheetContent>
         </Sheet>
      </div>
   )
};