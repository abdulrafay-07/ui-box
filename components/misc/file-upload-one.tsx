"use client"

import { useRef, useState, useCallback } from "react";

import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, File, X } from "lucide-react";

export const FileUploadOne = () => {
   const [file, setFile] = useState<File | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null);

   const onDrop = useCallback((acceptedFile: File) => {
      setFile(acceptedFile);
   }, []);

   const removeFile = () => {
      setFile(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = "";
      };
   };

   const renderFilePreview = (file: File) => {
      if (file.type.startsWith("image/")) {
         return <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover rounded" />
      };
      return <File className="w-16 h-16 text-primary" />;
   };

   return (
      <div className="h-full flex flex-col items-center justify-between bg-white border-r p-4 rounded-l-xl">
         <Card className="w-full max-w-lg py-4">
            <CardHeader>
               <CardTitle className="text-2xl text-center">File Upload</CardTitle>
            </CardHeader>
            <CardContent>
               <div
                  className="border-2 border-dashed border-input rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                     e.preventDefault();
                     const droppedFile = e.dataTransfer.files[0];
                     if (droppedFile) {
                        onDrop(droppedFile)
                     };
                  }}
                  onClick={() => fileInputRef.current?.click()}
               >
                  {file ? (
                     <div className="w-full">
                        <div className="aspect-square w-32 mx-auto rounded overflow-hidden bg-muted flex items-center justify-center mb-4">
                           {renderFilePreview(file)}
                        </div>
                        <p className="text-sm text-center text-muted-foreground mb-2 truncate">{file.name}</p>
                        <Button
                           variant="destructive"
                           size="sm"
                           className="w-full"
                           onClick={(e) => {
                              e.stopPropagation()
                              removeFile()
                           }}
                        >
                           <X className="w-4 h-4 mr-2" />
                           Remove File
                        </Button>
                     </div>
                  ) : (
                     <>
                        <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground text-center">
                           Drag & drop a file here, or click to select a file
                        </p>
                     </>
                  )}
                  <Input
                     type="file"
                     ref={fileInputRef}
                     className="hidden"
                     onChange={(e) => {
                        const selectedFile = e.target.files?.[0];
                        if (selectedFile) {
                           onDrop(selectedFile);
                        };
                     }}
                  />
               </div>
            </CardContent>
            <CardFooter>
               <p className="text-sm text-muted-foreground text-center w-full">
                  {file
                     ? `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`
                     : "No file selected"
                  }
               </p>
            </CardFooter>
         </Card>
      </div>
   )
};