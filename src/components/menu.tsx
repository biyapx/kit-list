"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getSections } from "@/data";
import { PlusIcon} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchInput } from "@/components/search-input";


const allSections = getSections();

export function Menu() {
  const router = useRouter();
  const [sections, setSections] = useState(allSections);

  const handleClick = (tag: string) => {
    router.push("/", { scroll: false });

    const element = document.getElementById(tag);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 56,
      behavior: "smooth",
    });

    // Run the handleClick function first
    clearSearch();
  };

  const clearSearch = () => {
    // Clear the search input
    setSections(allSections);
  };

  return (
    <aside className="w-64 p-4 flex flex-col outline outline-black/35 dark:outline-white/30 outline-1">
      {/* Search input */}
      <SearchInput onSearch={(term) => setSections(allSections.filter((section) => section.tag.toLowerCase().includes(term)))} clearSearch={clearSearch} />
      <Separator className="mb-4 -mt-1 z-10" />
      <ScrollArea className="flex-grow">
        <div className="space-y-1">
          {sections.map((section) => (
            <Button
              onClick={() => handleClick(section.tag)}
              key={section.tag}
              variant="ghost"
              className="w-full justify-start"
            >
              {section.tag}
              <span className="ml-auto text-[#878787]">
                {section.kits.length}
              </span>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <Separator className="my-4" />
      <div className="flex gap-2 justify-center items-center mb-4">
      <Separator className="my-4 w-16" />
      <div>Contribute</div>
      <Separator className="my-4 w-16" />
      </div>
      <a
        href="https://tally.so/r/wQBg81"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          className="w-full bg-[#ddddd9] hover:bg-[#b6b6b3] text-black border border-black rounded-full items-center justify-center gap-2 font-medium hidden md:flex dark:bg-[#2c2c1f] dark:text-white dark:border-gray-600"
          variant="outline"
        >
          <span>Submit</span> <PlusIcon className="w-4 h-4" />
        </Button>
      </a>
    </aside>
  );
}