import { Home, Clock, Wallet, User } from "lucide-react";
import type { PassengerPage } from "../PassengerApp";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  current: PassengerPage;
  onNavigate: (page: PassengerPage) => void;
}

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "history", label: "Activity", icon: Clock },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "profile", label: "Account", icon: User },
] as const;

export function BottomNav({ current, onNavigate }: BottomNavProps) {
  return (
    <nav className="flex h-20 items-center justify-around border-t border-slate-200 bg-white/95 backdrop-blur-sm pb-4 pt-2">
      {items.map((item) => {
        const Icon = item.icon;
        const active = current === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 text-xs font-medium transition-colors",
              active ? "text-teal-700" : "text-slate-400",
            )}
          >
            <Icon className="h-6 w-6" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}