"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface CodeProps {
   code: string;
};

export const Code = ({
   code,
}: CodeProps) => {
   const [isCopied, setIsCopied] = useState(false);

   const copyToClipboard = () => {
      window.navigator.clipboard.writeText(code)
         .then(() => setIsCopied(true))
         .then(() => setTimeout(() => {
            setIsCopied(false);
         }, 2000));
   };

   return (
      <div className="bg-white rounded-xl p-4 border">
         <div className="border bg-neutral-800 text-muted p-4 rounded-sm overflow-auto relative group h-[30rem]">
            <Button
               variant="ghostDark"
               size="sm"
               onClick={copyToClipboard}
               className="absolute hidden group-hover:block top-2 right-2"
            >
               {!isCopied ? (
                  <Copy className="h-4 w-4" />
               ) : (
                  <Check className="h-4 w-4" />
               )}
            </Button>
            <pre className="text-sm">
               <code>
                  {code}
               </code>
            </pre>
         </div>
      </div>
   )
};