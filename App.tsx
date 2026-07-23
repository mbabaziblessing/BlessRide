import { useState } from "react";
import { AdminSidebar } from "./components/AdminSidebar";
import { Dashboard } from "./pages/Dashboard";
import { UserManagement } from "./pages/UserManagement";
import { DriverApproval } from "./pages/DriverApproval";
import { RideMonitoring } from "./pages/RideMonitoring";
import { Earnings } from "./pages/Earnings";
import { Settings } from "./pages/Settings";
import { cn } from "@/lib/utils";

interface AdminAppProps {
  onSwitchRole: () => void;
}

export type AdminPage = "dashboard" | "users" | "drivers" | "rides" | "earnings" | "settings";

export function AdminApp({ onSwitchRole }: AdminAppProps) {
  const [page, setPage] = useState<AdminPage>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <UserManagement />;
      case "drivers":
        return <DriverApproval />;
      case "rides":
        return <RideMonitoring />;
      case "earnings":
        return <Earnings />;
      case "settings":
        return <Settings onSwitchRole={onSwitchRole} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <div
        className={cn(
          "fixed inset-0 z-20 bg-slate-900/50 transition-opacity lg:hidden",
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setSidebarOpen(false)}
      />
      <AdminSidebar 
        current={page} 
        onNavigate={(p) => { setPage(p); setSidebarOpen(false); }} 
        onSwitchRole={onSwitchRole}
        isOpen={sidebarOpen}
      />
      
      <div className="flex flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:px-8">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 className="text-xl font-bold capitalize text-slate-900">{page.replace(/_/g, " ")}</h1>
          <div className="flex items-center gap-2">
            <div className="hidden text-right lg:block">
              <p className="text-sm font-semibold text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">admin@blessride.ug</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 font-bold text-white">A</div>
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8">{renderPage()}</main>
      </div>
    </div>
  );
}