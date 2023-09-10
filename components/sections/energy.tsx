"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export function Energy() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6" id="energy">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight" >Energy</h2>
                <div className="flex items-center space-x-2">

                </div>
            </div>

            <div className="grid gap-4 grid-cols-1">
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
