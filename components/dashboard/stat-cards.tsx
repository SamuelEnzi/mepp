import React from 'react'
import totalItems from './total-items'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const CardItems = [
    {
        title: "Total Item Count",
        value: "12.241.432",
        sub: "+20.1% from last day",
        icon: totalItems()
    },
    {
        title: "Uranium Trend",
        value: "+2350",
        sub: "+180.1% from last day",
        icon: totalItems()
    },
    {
        title: "Averege Power Injection",
        value: "72kRf",
        sub: "+19% from last day",
        icon: totalItems()
    },
    {
        title: "Averege Power Usage",
        value: "12kRf",
        sub: "+201 since last day",
        icon: totalItems()
    }
]

export function StatCards() {
    return (
        <>
            {CardItems.map((card, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {card.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{card.value}</div>
                        <p className="text-xs text-muted-foreground">
                            {card.sub}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}
