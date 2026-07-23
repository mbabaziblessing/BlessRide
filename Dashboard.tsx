import { Star, Car } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { PassengerPage } from "../PassengerApp";

interface RideHistoryProps {
  onNavigate: (page: PassengerPage) => void;
}

const rides = [
  { id: 1, dest: "Acacia Mall", date: "Today, 2:30 PM", price: 12000, driver: "John M.", rating: 5 },
  { id: 2, dest: "Garden City", date: "Yesterday, 10:15 AM", price: 8500, driver: "David K.", rating: 4 },
  { id: 3, dest: "Entebbe Airport", date: "Mon, 8:00 AM", price: 45000, driver: "Peter S.", rating: 5 },
];

export function RideHistory({ onNavigate }: RideHistoryProps) {
  return (
    <div className="flex h-full flex-col p-4">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">Your Activity</h2>
      <div className="space-y-3">
        {rides.map((ride) => (
          <Card key={ride.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <Car className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{ride.dest}</p>
                  <p className="text-xs text-slate-500">{ride.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">UGX {ride.price.toLocaleString()}</p>
                <div className="flex items-center justify-end gap-1 text-xs text-slate-500">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {ride.rating}.0
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <button 
        onClick={() => onNavigate("home")} 
        className="mt-6 text-center text-sm font-semibold text-teal-700 hover:underline"
      >
        Book another ride
      </button>
    </div>
  );
}