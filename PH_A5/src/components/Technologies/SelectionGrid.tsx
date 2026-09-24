import type { Technology } from "../Types/Technology";
import SelectionCard from "./SelectionCard";

interface SelectionGridProps {
  technologies: Technology[];
  onSelect: (id: string) => void;
}

function SelectionGrid({
  technologies,
  onSelect,
}: SelectionGridProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <SelectionCard
            key={technology.id}
            technology={technology}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectionGrid;
