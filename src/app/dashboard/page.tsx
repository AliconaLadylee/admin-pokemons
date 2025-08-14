import { WidgetGrid } from "@/components";

export default function DashboardPage() {
  return (
    <div className="text-black p-2 flex flex-col">
      <h1 className="text-2xl font-bold">Dashboard </h1>

      <span className="text-slate-400">Informacion General</span>

      <WidgetGrid />
    </div>
  );
}
