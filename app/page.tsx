import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { components } from "@/constants/components";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col text-neutral-800 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
          Hey! You are at the right place 😉
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component) => (
            <div
              key={component.collapsibleName}
              className="p-4 rounded-3xl shadow-sm flex flex-col bg-white"
            >
              <span className="flex items-center text-xl font-medium mb-6">
                <component.collapsibleIcon className="h-7 w-7 mr-2" />
                {component.collapsibleName}
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {component.designs.map((design) => (
                  <Link
                    key={design.name}
                    href={design.href}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "justify-start text-base font-normal"
                    )}
                  >
                    {design.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Home;