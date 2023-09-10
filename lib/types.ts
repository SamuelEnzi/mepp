export interface Item {
    id: number;
    name: string;
    label: string;
    amount: number;
    data: JSON;
    created_at: Date;
}

export interface ItemCount {
    currentItemCount: number;
    yesterdayItemCount: number;
    incrementPercentage: number;
}

export interface UraniumTrend { 
    day: string, 
    dailyAmount: number 
}

export interface EnergyStats {
    id: number,
    powerInjection: number,
    powerUsage: number,
    idlePowerUsage: number,
    maxStoredPower: number,
    storedPower: number,
    data: JSON
}