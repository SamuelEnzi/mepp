"use client"

import React from 'react'
import totalItems from './total-items'
import Api from '@/lib/api'
import { useEffect, useState } from 'react'

import { formatNumber } from '@/lib/format'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function StatCards() {
    const [totalItemObject, setItemCountInfo] = useState({
        value: '',
        sub: ''
    });

    const [uraniumObject, setUraniumObject] = useState({
        value: '',
        sub: ''
    })

    useEffect(() => {
        Api.totalItemCount().then((itemCount) => {
            setItemCountInfo({
                value: formatNumber(itemCount.currentItemCount),
                sub: `${itemCount.incrementPercentage > 0 ? '+' : '-'}${itemCount.incrementPercentage}% from last day '${formatNumber(itemCount.yesterdayItemCount)}'`,
            });
        });

        Api.uraniumTrend().then((uraniumTrend) => {
            setUraniumObject({
                value: formatNumber(uraniumTrend.currentItemCount),
                sub: `${uraniumTrend.incrementPercentage > 0 ? '+' : '-'}${uraniumTrend.incrementPercentage}% from last day '${formatNumber(uraniumTrend.yesterdayItemCount)}'`,
            });
        });
    }, []);

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Item Count
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalItemObject.value}</div>
                    <p className="text-xs text-muted-foreground">
                        {totalItemObject.sub}
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Uranium Trend
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{uraniumObject.value}</div>
                    <p className="text-xs text-muted-foreground">
                        {uraniumObject.sub}
                    </p>
                </CardContent>
            </Card>
        </>
    )
}
