import { useState, useEffect } from "react";
import { priceFetchService } from "@/services/fetchServices/priceFetchService";

export function useGetPrices():[any[], boolean]{
    const [loading, setLoading] = useState(true);
    const [prices, setPrices] = useState<any[]>([]);

    useEffect(() => {(async () => {
        const prices = await priceFetchService.getPrices();
        
        setPrices(prices);
        setLoading(false);
    })()}, []);
    
    return [prices, loading];
}