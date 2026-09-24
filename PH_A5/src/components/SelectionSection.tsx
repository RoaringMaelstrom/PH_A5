import { useEffect, useState } from "react";
import SelectionGrid from "./Technologies/SelectionGrid";
import SelectedStack from "./Technologies/SelectedStack";

import type { Technology } from "./Types/Technology";

function SelectionSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchTechnologies = async (): Promise<void> => {
        const response = await fetch("data.json");

        const data: Technology[] = await response.json();
        setTechnologies(data);
    };

    fetchTechnologies();}
    , []);

  const handleSelect = (id: string) => {
    setSelectedIds((previous) => {
      if (previous.includes(id)) {
        return previous;
      }

      return [...previous, id];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedIds((previous) =>
      previous.filter((selectedId) => selectedId !== id)
    );
  };

  // const availableTechnologies = technologies.filter(
  //   (technology) => !selectedIds.includes(technology.id)
  // );

  const selectedTechnologies = technologies.filter(
    (technology) => selectedIds.includes(technology.id)
  );

  return (
    <section className="w-full px-16 pb-30">
      <div className="mb-5">
        <h1 className="text-4xl font-bold py-2">
          Explore the <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Technologies</span>
        </h1>

        <p className="mt-1 text-[16px] text-base-content/60">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_270px]">
        <SelectionGrid
          technologies={technologies}
          onSelect={handleSelect}
        />

        <SelectedStack
          technologies={selectedTechnologies}
          onRemove={handleRemove}
        />

      </div>
    </section>
  );
}

export default SelectionSection;