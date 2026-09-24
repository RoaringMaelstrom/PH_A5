import type { Technology } from "../Types/Technology";
import { FaStar } from "react-icons/fa";

interface SelectionCardProps {
  technology: Technology;
  onSelect: (id: string) => void;
}

function SelectionCard({
  technology,
  onSelect,
}: SelectionCardProps) {
  return (
    <article className="card border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="card-body">

        {/* Logo + badge */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-base-200 p-2">
            <img
              src={technology.logo}
              alt={`${technology.name} logo`}
              className="h-full w-full object-contain"
            />
          </div>

          {technology.badge && (
            <span className="badge badge-primary">
              {technology.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="mt-3 text-lg font-bold">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 text-[12px] text-gray-500">
          {technology.description}
        </p>

        <div>
            <div className="mt-2 flex justify-between items-center">
            <span className="badge bg-base-300 text-[11px] font-medium">
              {technology.category}
            </span>

            <span className="badge text-[11px] font-medium">
              {technology.difficulty}
            </span>

            <div className="flex items-center mb-1 gap-1 text-sm">
            <FaStar className="text-amber-600"></FaStar>
            <span>{technology.rating}</span>
            </div>
          </div>

          {/* Rating */}
          
        </div>

        
        <button
          type="button"
          className="btn btn-neutral mt-3 w-full"
          onClick={() => onSelect(technology.id)}
        >
          Add to Stack
        </button>

      </div>
    </article>
  );
}

export default SelectionCard;