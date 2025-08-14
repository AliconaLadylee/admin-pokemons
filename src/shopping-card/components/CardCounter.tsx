"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  initializeCounter,
  resetCounter,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

type CardCounterProps = {
  value?: number;
};

type CounterResponse = {
  count: number;
  method: string;
};

export const getApiCounter = async (): Promise<CounterResponse> => {
  const res = await fetch("/api/counter");
  return (await res.json()) as CounterResponse;
};

export default function CardCounter({ value = 0 }: CardCounterProps) {
  const dispatch = useAppDispatch();

  const counter = useAppSelector((state) => state.counter.value);

  // useEffect(() => {
  //   dispatch(initializeCounter(value));
  // }, [value, dispatch]);

  useEffect(() => {
    const fetchApiCounter = async () => {
      const apiCounter = await getApiCounter();
      dispatch(initializeCounter(apiCounter.count));
    };
    fetchApiCounter();
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex justify-between gap-1">
        <button
          className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-600 transition-all duration-100 ease-in-out cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>

        <button
          className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-600 transition-all duration-100 ease-in-out cursor-pointer"
          onClick={() => dispatch(resetCounter(0))}
        >
          0
        </button>

        <button
          className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-600 transition-all duration-100 ease-in-out cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
    </>
  );
}
