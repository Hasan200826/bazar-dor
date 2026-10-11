
"use client";

import { useEffect, useState } from "react";

export default function BanglaDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const banglaDate = new Date().toLocaleDateString("bn-BD", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    });

    setDate(banglaDate);
  }, []);

  if (!date) return <span>তারিখ লোড হচ্ছে...</span>;

  return <span>{date}</span>;
}
