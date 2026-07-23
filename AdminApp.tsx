import { useState } from "react";
import { Car, Bike, Users, Clock, CreditCard, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PassengerPage } from "../PassengerApp";

interface RideBookingProps {
  onNavigate: (page: PassengerPage) => void;
}

const rideOptions = [
  { id: "boda", name: "Boda Boda", desc: "Quick & nimble", price: 4500, time: "3 min", icon: Bike },
  { id: "car", name: "BlessCar", desc: "Affordable comfort", price: 12000, time: "5 min", icon: Car },
  { id: "xl", name: "BlessXL", desc: "Up to 4 seats", price: 18000, time: "8 min", icon: Users },
];

export function RideBooking({ onNavigate }: RideBookingProps) {
  const [selected, setSelected] = useState("car");
  const [paymentMethod, setPaymentMethod] = useState("mtn");

  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3 pb-3">
          <div className="h-3 w-3 rounded-full border-2 border-teal-700" />
          <p className="text-sm font-medium text-slate-700">Current Location</p>
        </div>
        <div className="ml-1.5 h-6 w-0.5 border-l-2 border-dashed border-slate-300" />
        <div className="flex items-center gap-3 pt-3">
          <div className="h-3 w-3 rounded-full bg-amber-500" />
          <p className="text-sm font-medium text-slate-700">Acacia Mall</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Choose a ride</h3>
        <div className="space-y-2">
          {rideOptions.map((opt) => {
            const Icon = opt.icon;
            const active = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all",
                  active
                    ? "border-teal-700 bg-teal-50 ring-1 ring-teal-700"
                    : "border-slate-200 bg-white hover:bg-slate-50",
                )}
              >
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", active ? "bg-teal-700" : "bg-slate-100")}>
                  <Icon className={cn("h-6 w-6", active ? "text-white" : "text-slate-600")} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-900">{opt.name}</p>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3 w-3" /> {opt.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{opt.desc}</p>
                </div>
                <p className="font-bold text-slate-900">UGX {opt.price.toLocaleString()}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">Payment Method</h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "mtn", name: "MTN MoMo" },
            { id: "airtel", name: "Airtel" },
            { id: "cash", name: "Cash" },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => setPaymentMethod(p.id)}
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-3 text-xs font-medium transition-all",
                paymentMethod === p.id
                  ? "border-teal-700 bg-teal-50 text-teal-800"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50",
              )}
            >
              <CreditCard className="mb-1 h-5 w-5" />
              {p.name}
            </button>
          ))}
        </div>
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200">
          <Tag className="h-4 w-4" /> Add Promo Code
        </button>
      </div>

      <div className="flex-1" />
      
      <Button 
        className="w-full bg-teal-700 py-6 text-base font-semibold hover:bg-teal-800" 
        onClick={() => onNavigate("tracking")}
      >
        Confirm {rideOptions.find(r => r.id === selected)?.name} • UGX {rideOptions.find(r => r.id === selected)?.price.toLocaleString()}
      </Button>
    </div>
  );
}