"use client"

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Box } from "lucide-react";

import { featureSchema } from "@/schemas/feature";
import { ApiResponse } from "@/types/api-response";

export const RequestFeature = () => {
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const form = useForm<z.infer<typeof featureSchema>>({
      resolver: zodResolver(featureSchema),
      defaultValues: {
         name: "",
         description: "",
      },
   });

   const onSubmit = async (data: z.infer<typeof featureSchema>) => {
      setIsSubmitting(true);
      try {
         const response = await axios.post<ApiResponse>("/api/feature/create", data);

         toast.success(response.data.message);
      } catch (error) {
         const axiosError = error as AxiosError<ApiResponse>;
         toast.error(axiosError.response?.data.message!);
      } finally {
         setIsSubmitting(false);
         setIsDialogOpen(false);
      };
   };

   return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
         <DialogTrigger asChild>
            <Button className="rounded-3xl hover:rounded-md transition-all duration-200">
               Request a Component
            </Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Request a New Component</DialogTitle>
               <DialogDescription>
                  Submit this form to request a new component.
               </DialogDescription>
            </DialogHeader>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Title</FormLabel>
                           <FormControl>
                              <Input placeholder="An E-commerce dashboard" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="description"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Description</FormLabel>
                           <FormControl>
                              <Textarea
                                 {...field}
                                 className="resize-none"
                                 rows={4}
                                 placeholder="An E-commerce Dashboard to show key metrics: total sales, orders, top products, customer insights, inventory status, and traffic sources in a clean, responsive layout."
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <DialogFooter>
                     <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                           <Box className="h-5 w-5 animate-spin" />
                        ) : (
                           "Submit request"
                        )}
                     </Button>
                  </DialogFooter>
               </form>
            </Form>
         </DialogContent>
      </Dialog>
   )
};