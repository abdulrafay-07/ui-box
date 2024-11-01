"use client"

import { useState } from "react";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import {
   Dialog,
   DialogTitle,
   DialogTrigger,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
   Avatar,
   AvatarImage,
   AvatarFallback,
} from "@/components/ui/avatar";
import { Box, LogOut, Menu, Plus, Settings, User } from "lucide-react";

const Sidebar = () => {
   return (
      <div className="h-full lg:h-[36rem] flex flex-col justify-between bg-white border-r p-4 rounded-l-xl">
         <div>
            <div className="flex items-center mb-6">
               <Box className="h-7 w-7 text-primary mr-2" />
               <h1 className="text-xl font-bold">boilergen</h1>
            </div>
            <nav>
               <ul className="cursor-pointer">
                  <li className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Dashboard</li>
                  <li className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Events</li>
                  <li className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Analytics</li>
               </ul>
            </nav>
         </div>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" className="w-full justify-start">
                  <Avatar>
                     <AvatarImage src="/avatar.png" alt="@shadcn" />
                     <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <span>Tyler Durden</span>
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
               <DropdownMenuLabel>Account Details</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
               </DropdownMenuItem>
               <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
};

const MobileSidebar = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   return (
      <div className="lg:hidden">
         <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild className="m-4">
               <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
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

const AddEventModal = () => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button size="sm">
               <Plus className="h-4 w-4" />
               <span>Add Event</span>
            </Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Event</DialogTitle>
               <DialogDescription>
                  Add an event. Click save when you are done.
               </DialogDescription>
            </DialogHeader>
            <div>
               Input fields
            </div>
            <DialogFooter>
               <Button type="submit">Save</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
};

export const One = () => {
   return (
      <div className="border rounded-xl flex bg-gray-50">
         <aside className="hidden lg:block w-60">
            <Sidebar />
         </aside>
         
         <div className="flex-1">
            <div className="flex items-center">
               <MobileSidebar />
               
               <div className="flex flex-col p-4 md:px-8">
                  <div className="flex items-center gap-x-8 mb-6">
                     <h3 className="text-xl md:text-2xl font-semibold">
                        Dashboard
                     </h3>
   
                     <AddEventModal />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
};