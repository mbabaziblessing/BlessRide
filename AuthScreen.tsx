import { useState } from "react";
import { Search, MapPin, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PassengerPage } from "../PassengerApp";

interface SearchDestinationProps {
  onNavigate: (page: PassengerPage) => void;
}

const recentDestinations = [
  { name: "Acacia Mall", address: "Kira Road, Kampala", time: "Yesterday" },
  { name: "Entebbe Airport", address: "Entebbe, Uganda", time: "Last week" },
  { name: "Garden City", address: "Yusuf Lule Road, Kampala", time: "Last week" },
];

export function SearchDestination({ onNavigate }: SearchDestinationProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="h-3 w-3 rounded-full border-2 border-teal-700" />
          <input
            value="Current Location"
            readOnly
            className="w-full bg-transparent text-sm font-medium text-slate-700 focus:outline-none"
          />
        </div>
        
        <div className="relative flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where to?"
            className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")}>
              <X className="h-5 w-5 text-slate-400" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <h3 className="mb-3 px-1 text-sm font-semibold text-slate-700">Recent locations</h3>
        <div className="space-y-1">
          {recentDestinations.map((dest) => (
            <button
              key={dest.name}
              onClick={() => onNavigate("booking")}
              className="flex w-full items-center gap-4 rounded-xl p-3 text-left transition-colors hover:bg-slate-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <Clock className="h-5 w-5 text-slate-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{dest.name}</p>
                <p className="text-xs text-slate-500">{dest.address}</p>
              </div>
              <span className="text-xs text-slate-400">{dest.time}</span>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="mb-3 px-1 text-sm font-semibold text-slate-700">Popular in Kampala</h3>
          <div className="space-y-1">
            {["Uganda Museum", "The Hub Mall", "Makerere University"].map((place) => (
               <button
               key={place}
               onClick={() => onNavigate("booking")}
               className="flex w-full items-center gap-4 rounded-xl p-3 text-left transition-colors hover:bg-slate-100"
             >
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                 <MapPin className="h-5 w-5 text-teal-700" />
               </div>
               <div className="flex-1">
                 <p className="font-semibold text-slate-900">{place}</p>
                 <p className="text-xs text-slate-500">Kampala, Uganda</p>
               </div>
             </button>
            ))}
          </div>
        </div>
      </div>

      <Button 
        className="mt-4 w-full bg-teal-700 py-6 text-base font-semibold hover:bg-teal-800" 
        onClick={() => onNavigate("booking")}
        disabled={!query}
      >
        Confirm Destination
      </Button>
    </div>
  );
}