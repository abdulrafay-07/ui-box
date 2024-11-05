"use client"

import { useState } from "react";

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

const categories = [
   "All Categories",
   "Electronics",
   "Clothing",
   "Books",
   "Home & Garden",
   "Sports",
];
 
const sampleSuggestions = [
   { text: "wireless headphones", category: "Electronics" },
   { text: "running shoes", category: "Sports" },
   { text: "winter jacket", category: "Clothing" },
   { text: "science fiction books", category: "Books" },
];

const recentSearchData = ["laptop", "running shoes", "desk lamp"];
const quickFilters = ["In Stock", "Free Shipping", "On Sale", "Highly Rated"];

export const AdvancedSearchBar = () => {
   const [searchText, setSearchText] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All Categories");
   const [activeFilters, setActiveFilters] = useState<string[]>([]);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [recentSearches, setRecentSearches] = useState(recentSearchData);

   const handleSearch = (query: string) => {
      setSearchText(query);
      setShowSuggestions(query.length > 0);
   };

   const addFilter = (filter: string) => {
      if (!activeFilters.includes(filter)) {
         setActiveFilters([...activeFilters, filter]);
      };
   };

   const removeFilter = (filter: string) => {
      setActiveFilters(activeFilters.filter(f => f !== filter));
   };

   const selectSuggestion = (suggestion: {text: string, category?: string}) => {
      setSearchText(suggestion.text);
      setShowSuggestions(false);
      if (!recentSearches.includes(suggestion.text)) {
         setRecentSearches([suggestion.text, ...recentSearches.slice(0, 4)]);
      };
   };

   return (
      <div className="flex flex-col items-center justify-between bg-white p-4 rounded-xl border">
         <div className="relative w-full max-w-xl">
            <div className="flex flex-col md:flex-row items-center gap-2">
               <Select
                  defaultValue="All Categories"
                  onValueChange={setSelectedCategory}
               >
                  <SelectTrigger className="w-full md:w-[180px]">
                     <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                     {categories.map((category) => (
                        <SelectItem
                           key={category}
                           value={category}
                        >
                           {category}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>

               <div className="flex-1 relative w-full">
                  <div className="relative">
                     <Search className="absolute left-[10px] top-[10px] text-gray-400" size={20} />
                     <Input
                        type="text"
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full pl-10"
                        placeholder="Search..."
                     />
                  </div>

                  {showSuggestions && (
                     <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg">
                        {recentSearches.length > 0 && (
                           <div className="p-2">
                              <div className="text-xs text-gray-500 mb-2">Recent Searches</div>
                              {recentSearches.map((search) => (
                                 <Button
                                    key={search}
                                    variant="ghost"
                                    className="w-full justify-start px-2 py-1.5 text-sm hover:bg-gray-100"
                                    onClick={() => selectSuggestion({ text: search })}
                                 >
                                    {search}
                                 </Button>
                              ))}
                              <div className="border-t my-2" />
                           </div>
                        )}

                        {sampleSuggestions
                           .filter(suggestion => 
                              suggestion.text.toLowerCase().includes(searchText.toLowerCase()) &&
                              (selectedCategory === "All Categories" || suggestion.category === selectedCategory)
                           )
                           .map((suggestion) => (
                              <Button
                                 key={suggestion.text}
                                 variant="ghost"
                                 className="w-full justify-between px-4 py-2 text-sm hover:bg-gray-100"
                                 onClick={() => selectSuggestion(suggestion)}
                              >
                                 <span>{suggestion.text}</span>
                                 <Badge variant="secondary" className="text-xs">
                                    {suggestion.category}
                                 </Badge>
                              </Button>
                        ))}
                     </div>
                  )}
               </div>
            </div>

            {activeFilters.length > 0 && (
               <div className="flex flex-wrap gap-2 mt-3">
                  {activeFilters.map((filter) => (
                     <Badge
                        key={filter}
                        variant="secondary"
                        className="flex items-center gap-1"
                     >
                        {filter}
                        <Button
                           variant="ghost"
                           size="sm"
                           className="h-4 w-4 p-0 hover:bg-transparent"
                           onClick={() => removeFilter(filter)}
                        >
                           <X size={14} />
                        </Button>
                     </Badge>
                  ))}
               </div>
            )}

            <div className="flex flex-wrap gap-2 mt-3">
               {quickFilters.map((filter) => (
                  <Button
                     key={filter}
                     variant={activeFilters.includes(filter) ? "secondary" : "outline"}
                     size="sm"
                     onClick={() => addFilter(filter)}
                  >
                     {filter}
                  </Button>
               ))}
            </div>
         </div>
      </div>
   )
};