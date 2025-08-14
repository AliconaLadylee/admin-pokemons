import CardCounter from "@/shopping-card/components/CardCounter";

export const metadata = {
  title: "Shopping card",
  description: "Shopping card page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="uppercase">Productos en el carrito</span>
      <CardCounter value={20} />
    </div>
  );
}
