import { Item, EnergyStats } from "@/lib/types";

async function fetchFromAPI(endpoint: string): Promise<any> {
    try{
        const url = `${endpoint}`
        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch (error){
        console.error("Failed to fetch data from API:", error);
        return null;
    }
}

class Api {
    public static fetchDailyItemCount = (): Promise<any[]> => {
        return fetchFromAPI('/v1/statistics/daily');
    };

    public static totalItemCount = (): Promise<any> => {
        return fetchFromAPI('/v1/statistics/itemcount');
    };

    public static uraniumTrend = (): Promise<any> => {
        return fetchFromAPI('/v1/statistics/uranium');
    }

    public static topItems = (): Promise<Item[]> => {
        return fetchFromAPI('/v1/statistics/top');
    }

    public static energyStats = (): Promise<EnergyStats> => {
        return fetchFromAPI('/v1/statistics/energy');
    }
}

export default Api;