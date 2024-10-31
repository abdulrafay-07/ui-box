"use client"

import { useState } from "react";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { buttonVariants } from "@/components/ui/button";
import { Box, ChevronRight } from "lucide-react";

import { components } from "@/constants/components";
import { cn } from "@/lib/utils";

interface OpenItemsState {
   [key: string]: boolean;
};

export const Sidebar = () => {
   const [openItems, setOpenItems] = useState<OpenItemsState>({});

   const handleToggle = (componentName: string) => {
      setOpenItems(prev => ({
         ...prev,
         [componentName]: !prev[componentName]
      }));
   };

   return (
      <div className="h-full bg-white rounded-3xl shadow-sm">
         <ScrollArea className="h-full">
            <div className="p-4">
               {/* Logo */}
               <div className="flex items-center mb-6">
                  <Box className="h-7 w-7 text-primary mr-2" />
                  <h1 className="text-xl font-bold">ui-box</h1>
               </div>
               {components.map((component) => (
                  <Collapsible
                     key={component.collapsibleName}
                     open={openItems[component.collapsibleName]}
                     onOpenChange={() => handleToggle(component.collapsibleName)}
                  >
                     <CollapsibleTrigger
                        className="flex items-center justify-between w-full p-2 text-sm text-left text-gray-900 rounded-lg hover:bg-gray-100 font-medium"
                     >
                        <span className="flex items-center">
                           <component.collapsibleIcon className="w-5 h-5 mr-2" />
                           {component.collapsibleName}
                        </span>
                        <ChevronRight 
                           className={cn(
                              "h-4 w-4 transition-transform duration-100",
                              openItems[component.collapsibleName] && "rotate-90"
                           )}
                        />
                     </CollapsibleTrigger>
                     <CollapsibleContent className="pl-2 mt-2 space-y-2">
                        {component.designs.map((design) => (
                           <Link
                              key={design.name}
                              href={design.href}
                              className={cn(
                                 buttonVariants({ variant: "ghost" }),
                                 "w-full justify-start font-normal"
                              )}
                           >
                              {design.name}
                           </Link>
                        ))}
                     </CollapsibleContent>
                  </Collapsible>
               ))}
            </div>
         </ScrollArea>
      </div>
   )
};