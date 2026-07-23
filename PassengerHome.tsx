import { useState } from "react";
import { PassengerHome } from "./pages/PassengerHome";
import { SearchDestination } from "./pages/SearchDestination";
import { RideBooking } from "./pages/RideBooking";
import { LiveTracking } from "./pages/LiveTracking";
import { RideHistory } from "./pages/RideHistory";
import { Wallet } from "./pages/Wallet";
import { Profile } from "./pages/Profile";
import { AppShell } from "@/modules/passenger/components/AppShell";
import { BottomNav } from "@/modules/passenger/components/BottomNav";

export type PassengerPage =
  | "home"
  | "search"
  | "booking"
  | "tracking"
  | "history"
  | "wallet"
  | "profile";

interface PassengerAppProps {
  onSwitchRole: () => void;
}

export function PassengerApp({ onSwitchRole }: PassengerAppProps) {
  const [page, setPage] = useState<PassengerPage>("home");

  const showBottomNav = ["home", "history", "wallet", "profile"].includes(page);
  const showBackButton = ["search", "booking", "tracking"].includes(page);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <PassengerHome onNavigate={setPage} />;
      case "search":
        return <SearchDestination onNavigate={setPage} />;
      case "booking":
        return <RideBooking onNavigate={setPage} />;
      case "tracking":
        return <LiveTracking onNavigate={setPage} />;
      case "history":
        return <RideHistory onNavigate={setPage} />;
      case "wallet":
        return <Wallet onNavigate={setPage} />;
      case "profile":
        return <Profile onNavigate={setPage} onSwitchRole={onSwitchRole} />;
      default:
        return <PassengerHome onNavigate={setPage} />;
    }
  };

  return (
    <AppShell
      showBackButton={showBackButton}
      onBack={() => setPage("home")}
      showBottomNav={showBottomNav}
      bottomNav={<BottomNav current={page} onNavigate={setPage} />}
    >
      {renderPage()}
    </AppShell>
  );
}