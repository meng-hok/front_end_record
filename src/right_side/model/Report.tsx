import { myURL } from "../../GlobalHelper";

export interface Report {
    categoryId ?: number,
    name ?: string,
    service_amount?: number | string,
    total_price?:  string
}

const GET_URL = myURL+"/record/report"

export const getReportDuring= async (start: any ,end : any) => {
    try {
        const result =await fetch(`${GET_URL}?start=${start}&end=${end}`);
        const json = await result.json();
     
        return json;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const static_data : Report[] = [
    {
        "categoryId": 1,
        "name": "developer",
        "service_amount": "12117",
        "total_price": "45772"
    },
    {
        "categoryId": 2,
        "name": "developer",
        "service_amount": "12602",
        "total_price": "0"
    },
    {
        "categoryId": 3,
        "name": "developer",
        "service_amount": "2327",
        "total_price": "8048"
    },
    {
        "categoryId": 13,
        "name": "menghok",
        "service_amount": "51",
        "total_price": "6273"
    }
] 