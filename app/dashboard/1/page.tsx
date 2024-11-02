import { One as DashboardOneComponent } from "@/components/dashboard/one";
import { Code } from "@/components/dashboard/code";

import { dashboardOne } from "@/constants/codes";

const DashboardOne = () => {
   return (
      <div className="p-4 md:px-8 text-neural-800 flex flex-col gap-y-10">
         <DashboardOneComponent />
         <Code
            code={dashboardOne}
         />
      </div>
   )
};

export default DashboardOne;