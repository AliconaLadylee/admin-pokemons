"use client";

import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "..";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex flex-wrap">
      <SimpleWidget
        title={counter.toString()}
        label="Productos en el carrito"
        subtitle="Contador"
        href="/dashboard/counter"
        icon={<IoCafeOutline size={70} className="text-indigo-600" />}
      />
    </div>
  );
};
