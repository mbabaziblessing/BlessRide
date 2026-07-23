import { useEffect, useState } from "react";
import { Phone, MessageSquare, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPlaceholder } from "../components/MapPlaceholder";
import type { PassengerPage } from "../PassengerApp";

interface LiveTrackingProps {
  onNavigate: (page: PassengerPage) => void;
}

export function LiveTracking({ onNavigate }: LiveTrackingProps) {
  const [status, setStatus] = useState<"arriving" | "in_ride">("arriving");
  const [eta, setEta] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => (prev > 0 ? prev - 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <MapPlaceholder className="h-1/2" variant="tracking" />
      
      <div className="relative -mt-8 flex-1 overflow-y-auto rounded-t-3xl bg-white p-6 shadow-lg">
        <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-slate-300" />
        
        <div className="mb-6 flex items-center justify-between rounded-xl bg-teal-50 p-4">
          <div>
            <p className="text-sm text-teal-700">
              {status === "arriving" ? "Driver is arriving" : "On the way to destination"}
            </p>
            <p className="text-2xl font-bold text-teal-900">{eta} min away</p>
          </div>
          <ShieldCheck className="h-10 w-10 text-teal-700" />
        </div>

        <div className="mb-6 flex items-center gap-4 border-b border-slate-100 pb-6">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-amber-500 text-xl font-bold text-white">JM</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-slate-900">John M.</p>
              <span className="flex items-center gap-1 text-sm font-medium text-slate-600">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9
              </span>
            </div>
            <p className="text-sm text-slate-500">Blue Toyota Hiace • UAH 456B</p>
          </div>
          <div className="flex gap-2">
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
              <MessageSquare className="h-5 w-5" />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 text-white hover:bg-teal-800">
              <Phone className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full border-2 border-teal-700" />
            <p className="text-sm font-medium text-slate-700">Current Location</p>
          </div>
          <div className="ml-1.5 h-6 w-0.5 border-l-2 border-dashed border-slate-300" />
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            <p className="text-sm font-medium text-slate-700">Acacia Mall</p>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="mt-8 w-full border-red-200 py-6 text-base font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
          onClick={() => onNavigate("history")}
        >
          Cancel Ride
        </Button>
      </div>
    </div>
  );
}