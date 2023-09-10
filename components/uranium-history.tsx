"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Api from "@/lib/api"
import { useState, useEffect } from "react";

export function UraniumHistory() {

  const [data, setData] = useState([]);

  useEffect(() => {
      Api.fetchDailyItemCount().then((uranium) => {
          const formattedData = uranium.reverse().map((item) => ({
              name: item.day,
              total: item.dailyAmount,
          }));
          setData(formattedData as any);
      }).catch((error) => {
          console.error("Failed to fetch uranium data:", error.message);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#34d399" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}