"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function CurrentClock() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time.format("HH:mm")}</span>;
}
