import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

interface MapPlaceholderProps {
  className?: string;
  variant?: "pickup" | "tracking";
}

export function MapPlaceholder({ className, variant = "pickup" }: MapPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-slate-200",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 118, 110, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 118, 110, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute left-1/4 top-1/3 h-24 w-40 rounded-lg bg-teal-700/10" />
      <div className="absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full bg-amber-500/10" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {variant === "pickup" ? (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 shadow-lg shadow-teal-700/30 ring-4 ring-white">
            <MapPin className="h-6 w-6 text-white" />
          </div>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/30 ring-4 ring-white rotate-45">
            <Navigation className="h-6 w-6 text-white -rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
}