"use client"
import React from 'react'
import { StatCards } from "@/components/dashboard/stat-cards"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { UraniumHistory } from "@/components/uranium-history"
import { TopItems } from "@/components/top-items"

export function Overview() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6" id="overview">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight" >Dashboard</h2>
                <div className="flex items-center space-x-2">

                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
                <StatCards />
            </div>
            <div className="grid gap-0 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-7">
                <Card className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <UraniumHistory />
                    </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3 mt-4 xs:mt-4 lg:mt-0">
                    <CardHeader>
                        <CardTitle>Top Items</CardTitle>
                        <CardDescription>
                            The current most popular items
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TopItems />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
