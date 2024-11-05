import { AdvancedSearchBar as AdvancedSearchBarComponent } from "@/components/user/advanced-search-bar";
import { Code } from "@/components/dashboard/code";

import { searchComponent } from "@/constants/codes/user";

const AdvancedSearchBar = () => {
   return (
      <div className="p-4 md:px-8 text-neural-800 flex flex-col gap-y-10">
         <AdvancedSearchBarComponent />
         <Code
            code={searchComponent}
         />
      </div>
   )
};

export default AdvancedSearchBar;