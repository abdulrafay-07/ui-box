export const dashboardOne = `"use client"

import { useState } from "react";
import Link from "next/link";

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
import {
   Card,
   CardContent,
} from "@/components/ui/card";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import {
   Avatar,
   AvatarImage,
   AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eclipse, LogOut, Menu, MousePointerClick, Plus, Settings, User } from "lucide-react";

import { cn } from "@/lib/utils";

const Sidebar = () => {
   return (
      <div className="h-full flex flex-col justify-between bg-white border-r p-4">
         <div>
            <Link href="/" className="flex items-center mb-6">
               <Eclipse className="h-7 w-7 text-primary mr-2" />
               <h1 className="text-xl font-bold">Fight Club</h1>
            </Link>
            <nav>
               <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Dashboard</Link>
               <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Events</Link>
               <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Analytics</Link>
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
               Add your input fields here
            </div>
            <DialogFooter>
               <Button type="submit">Save</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
};

// mock data

// Mock data for different event types
const bugEvents = [
   { id: 1, title: "Login Error", date: "10/21/2024, 09:15:00 AM", severity: "High", status: "Open" },
   { id: 2, title: "UI Glitch", date: "10/20/2024, 02:30:00 PM", severity: "Low", status: "Closed" },
   { id: 3, title: "Link Issue", date: "10/19/2024, 04:10:00 PM", severity: "High", status: "Closed" },
];
 
const saleEvents = [
   { id: 1, customer: "Tyler Durden", date: "10/21/2024, 10:00:00 AM", amount: 50, plan: "Pro" },
   { id: 2, customer: "Christian Bale", date: "10/20/2024, 03:45:00 PM", amount: 100, plan: "Enterprise" },
];
 
const signupEvents = [
   { id: 1, user: "tylerdurden@fightclub.com", date: "10/21/2024, 11:30:00 AM", referral: "Google" },
   { id: 2, user: "christianbale@gmail.com", date: "10/20/2024, 04:20:00 PM", referral: "Direct" },
   { id: 3, user: "joiner@example.com", date: "10/20/2024, 03:09:00 PM", referral: "X" },
   { id: 4, user: "user@example.com", date: "10/20/2024, 01:30:00 PM", referral: "Reddit" },
];

const eventTypes = [
   {type: "Bug", count: bugEvents.length},
   {type: "Sale", count: saleEvents.length},
   {type: "Signup", count: signupEvents.length},
];

export const Dashboard = () => {
   const [selectedEventType, setSelectedEventType] = useState<string | null>(null);

   return (
      <div className="border rounded-xl flex bg-gray-50">
         <aside className="hidden lg:block w-60">
            <Sidebar />
         </aside>
         
         <div className="flex-1">
            <MobileSidebar />
            
            <div className="flex flex-col p-4 md:px-8">
               <div className="flex items-center gap-x-8 mb-6">
                  <h3
                     className="text-xl md:text-2xl font-semibold cursor-pointer"
                     onClick={() => setSelectedEventType(null)}
                  >
                     Dashboard
                  </h3>

                  <AddEventModal />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
                  {eventTypes.map((eventType) => (
                     <Card
                        key={eventType.type}
                        className={cn(
                           "cursor-pointer",
                           selectedEventType === eventType.type ? "ring-1 ring-primary" : ""
                        )}
                        onClick={() => setSelectedEventType(eventType.type)}
                     >
                        <CardContent className="flex items-center justify-between p-6">
                           <span className="font-medium">{eventType.type}</span>
                           <span className="text-2xl font-semibold">{eventType.count}</span>
                        </CardContent>
                     </Card>
                  ))}
               </div>

               {/* Conditional Event Tables */}
               {selectedEventType ? (
                  <Card className="mb-6">
                     <CardContent className="p-0 overflow-x-auto w-[300px] md:w-auto">
                        {selectedEventType === "Bug" && (
                           <Table>
                              <TableHeader>
                                 <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Severity</TableHead>
                                    <TableHead>Status</TableHead>
                                 </TableRow>
                              </TableHeader>
                              <TableBody>
                                 {bugEvents.map((event) => (
                                    <TableRow key={event.id}>
                                       <TableCell>{event.title}</TableCell>
                                       <TableCell>{event.date}</TableCell>
                                       <TableCell>
                                          <Badge
                                             variant={event.severity === "High" ? "high" : "low"}
                                          >
                                             {event.severity}
                                          </Badge>
                                       </TableCell>
                                       <TableCell>
                                          {event.status}
                                       </TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        )}
                           {selectedEventType === "Sale" && (
                           <Table>
                              <TableHeader>
                                 <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Plan</TableHead>
                                 </TableRow>
                              </TableHeader>
                              <TableBody>
                                 {saleEvents.map((event) => (
                                    <TableRow key={event.id}>
                                       <TableCell>{event.customer}</TableCell>
                                       <TableCell>{event.date}</TableCell>
                                       <TableCell>$ {event.amount}</TableCell>
                                       <TableCell>{event.plan}</TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        )}
                        {selectedEventType === "Signup" && (
                           <Table>
                              <TableHeader>
                                 <TableRow>
                                    <TableHead>User</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Referral</TableHead>
                                 </TableRow>
                              </TableHeader>
                              <TableBody>
                                 {signupEvents.map((event) => (
                                    <TableRow key={event.id}>
                                       <TableCell>{event.user}</TableCell>
                                       <TableCell>{event.date}</TableCell>
                                       <TableCell>{event.referral}</TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        )}
                     </CardContent>
                  </Card>
               ) : (
                  <div className="flex flex-col items-center justify-center py-10">
                     <MousePointerClick className="h-12 w-12 mb-6 hover:animate-pulse" />
                     <h2 className="text-xl font-medium text-center">
                        Click on any event to view the data
                     </h2>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
};`