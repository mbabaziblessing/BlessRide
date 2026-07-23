import { Search, MapPin, Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPlaceholder } from "../components/MapPlaceholder";
import type { PassengerPage } from "../PassengerApp";

interface PassengerHomeProps {
  onNavigate: (page: PassengerPage) => void;
}

export function PassengerHome({ onNavigate }: PassengerHomeProps) {
  return (
    <div className="flex h-full flex-col">
      <MapPlaceholder className="flex-1" />
      
      <div className="relative -mt-8 flex-1 rounded-t-3xl bg-slate-50 p-6">
        <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-slate-300" />
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Good morning, Sarah</h2>
          <p className="text-sm text-slate-500">Where are you going today?</p>
        </div>

        <button
          onClick={() => onNavigate("search")}
          className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-colors hover:bg-slate-50"
        >
          <Search className="h-5 w-5 text-slate-400" />
          <span className="text-slate-500">Enter destination</span>
        </button>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-slate-700">Saved places</h3>
          <div className="grid grid-cols-2 gap-3">
            <Card className="cursor-pointer p-4 transition-colors hover:bg-slate-50" onClick={() => onNavigate("search")}>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                <MapPin className="h-5 w-5 text-teal-700" />
              </div>
              <p className="font-semibold text-slate-900">Home</p>
              <p className="text-xs text-slate-500">Kololo, Kampala</p>
            </Card>
            <Card className="cursor-pointer p-4 transition-colors hover:bg-slate-50" onClick={() => onNavigate("search")}>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <Star className="h-5 w-5 text-amber-600" />
              </div>
              <p className="font-semibold text-slate-900">Work</p>
              <p className="text-xs text-slate-500">Nakasero, Kampala</p>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-slate-700">Recent</h3>
          <Card className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <Clock className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Acacia Mall</p>
                <p className="text-xs text-slate-500">Yesterday, 2:30 PM</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400" />
          </Card>
        </div>

        <Button 
          className="mt-6 w-full bg-teal-700 py-6 text-base font-semibold hover:bg-teal-800" 
          onClick={() => onNavigate("search")}
        >
          Book a Ride
        </Button>
      </div>
    </div>
  );
}