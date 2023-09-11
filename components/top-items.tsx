"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useState, useEffect } from "react";
import Api from "@/lib/api";
import { Item } from "@/lib/types";

import { formatNumber } from "@/lib/format";

export function TopItems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.topItems().then((items) => {
      setData(items as any);
    }).catch((error) => {
      console.error("Failed to data", error.message);
    });
  }, []);


  return (
    <div className="space-y-8">
      <div className="space-y-8">
        {data.map((item: Item, index) => (
          <div key={index} className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.label}</p>
              <p className="text-sm text-muted-foreground">
                {item.name}
              </p>
            </div>
            <div className="ml-auto font-medium">{formatNumber(item.amount)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}