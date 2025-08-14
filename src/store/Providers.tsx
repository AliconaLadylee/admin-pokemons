"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from ".";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // storeRef.current.dispatch(initializeCount(count))
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
