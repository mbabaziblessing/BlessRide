import { Plus, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PassengerPage } from "../PassengerApp";

interface WalletProps {
  onNavigate: (page: PassengerPage) => void;
}

const transactions = [
  { id: 1, type: "debit", desc: "Ride to Acacia Mall", date: "Today", amount: 12000 },
  { id: 2, type: "credit", desc: "Wallet Top Up", date: "Yesterday", amount: 50000 },
  { id: 3, type: "debit", desc: "Ride to Garden City", date: "2 days ago", amount: 8500 },
];

export function Wallet({ onNavigate }: WalletProps) {
  return (
    <div className="flex h-full flex-col p-4">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">My Wallet</h2>
      
      <Card className="mb-6 overflow-hidden border-0 bg-gradient-to-br from-teal-800 to-teal-600 p-6 text-white shadow-lg">
        <p className="text-sm text-teal-100">Available Balance</p>
        <p className="mt-1 text-4xl font-bold">UGX 38,500</p>
        <div className="mt-6 flex gap-3">
          <Button className="flex-1 bg-white py-5 text-teal-800 hover:bg-teal-50">
            <Plus className="mr-2 h-4 w-4" /> Top Up
          </Button>
          <Button variant="outline" className="flex-1 border-white/40 bg-transparent py-5 text-white hover:bg-white/10">
            Cash Out
          </Button>
        </div>
      </Card>

      <h3 className="mb-3 text-sm font-semibold text-slate-700">Transactions</h3>
      <div className="space-y-2">
        {transactions.map((tx) => (
          <Card key={tx.id} className="flex items-center gap-4 p-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${tx.type === "credit" ? "bg-emerald-100" : "bg-rose-100"}`}>
              {tx.type === "credit" ? <ArrowDownLeft className="h-5 w-5 text-emerald-700" /> : <ArrowUpRight className="h-5 w-5 text-rose-700" />}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900">{tx.desc}</p>
              <p className="text-xs text-slate-500">{tx.date}</p>
            </div>
            <p className={`font-bold ${tx.type === "credit" ? "text-emerald-700" : "text-slate-900"}`}>
              {tx.type === "credit" ? "+" : "-"} UGX {tx.amount.toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
      
      <button 
        onClick={() => onNavigate("home")} 
        className="mt-6 text-center text-sm font-semibold text-teal-700 hover:underline"
      >
        Back to Home
      </button>
    </div>
  );
}