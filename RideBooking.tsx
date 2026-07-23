import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
  showBottomNav?: boolean;
  bottomNav?: ReactNode;
}

export function AppShell({
  children,
  showBackButton = false,
  onBack,
  showBottomNav = false,
  bottomNav,
}: AppShellProps) {
  return (
    <div className="relative mx-auto flex h-screen max-w-md flex-col bg-slate-50 shadow-2xl shadow-slate-900/10">
      <header
        className={cn(
          "flex h-16 items-center border-b border-slate-200 bg-white px-4",
          !showBackButton && "justify-center",
        )}
      >
        {showBackButton && (
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100"
            aria-label="Go back"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 font-bold text-white">
            B
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Bless<span className="text-teal-700">Ride</span>
          </span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-20">{children}</main>

      {showBottomNav && (
        <div className="absolute bottom-0 left-0 right-0 z-10">{bottomNav}</div>
      )}
    </div>
  );
}