import { Star, Settings, Shield, HelpCircle, LogOut, ChevronRight, Repeat } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { PassengerPage } from "../PassengerApp";

interface ProfileProps {
  onNavigate: (page: PassengerPage) => void;
  onSwitchRole: () => void;
}

const menuItems = [
  { icon: Settings, label: "Settings", color: "text-slate-600" },
  { icon: Shield, label: "Safety Center", color: "text-teal-700" },
  { icon: HelpCircle, label: "Help & Support", color: "text-amber-600" },
];

export function Profile({ onNavigate, onSwitchRole }: ProfileProps) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-6 flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarFallback className="bg-amber-500 text-3xl font-bold text-white">SA</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold text-slate-900">Sarah Achieng</h2>
        <p className="text-sm text-slate-500">+256 700 123 456</p>
        <div className="mt-2 flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span className="text-sm font-semibold text-amber-700">4.9 Rating</span>
        </div>
      </div>

      <Card className="mb-6 grid grid-cols-3 divide-x divide-slate-100 p-4 text-center">
        <div>
          <p className="text-xl font-bold text-slate-900">24</p>
          <p className="text-xs text-slate-500">Trips</p>
        </div>
        <div>
          <p className="text-xl font-bold text-slate-900">UGX 150k</p>
          <p className="text-xs text-slate-500">Spent</p>
        </div>
        <div>
          <p className="text-xl font-bold text-slate-900">2</p>
          <p className="text-xs text-slate-500">Years</p>
        </div>
      </Card>

      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:bg-slate-50"
            >
              <Icon className={`h-5 w-5 ${item.color}`} />
              <span className="flex-1 font-semibold text-slate-800">{item.label}</span>
              <ChevronRight className="h-5 w-5 text-slate-400" />
            </button>
          );
        })}
        
        <button
          onClick={onSwitchRole}
          className="flex w-full items-center gap-4 rounded-xl border border-teal-700 bg-teal-50 p-4 text-left transition-colors hover:bg-teal-100"
        >
          <Repeat className="h-5 w-5 text-teal-700" />
          <span className="flex-1 font-semibold text-teal-800">Switch to Admin Dashboard</span>
          <ChevronRight className="h-5 w-5 text-teal-700" />
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="flex w-full items-center gap-4 rounded-xl border border-rose-200 bg-white p-4 text-left transition-colors hover:bg-rose-50"
        >
          <LogOut className="h-5 w-5 text-rose-600" />
          <span className="flex-1 font-semibold text-rose-600">Log Out</span>
          <ChevronRight className="h-5 w-5 text-rose-400" />
        </button>
      </div>
    </div>
  );
}