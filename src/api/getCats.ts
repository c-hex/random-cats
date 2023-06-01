import Axios from "axios";

interface GetCatsResponse {
    height: number;
    id: string;
    url: string;
    width: number;
}

export type {GetCatsResponse}

export async function getCats(): Promise<GetCatsResponse[] | false> {
    try {
        const {data} = await Axios.get<GetCatsResponse[]>('https://api.thecatapi.com/v1/images/search?limit=10');
        return data;
    } catch(error) {
        console.log(error);
        return false;
    }
  
}

export default getCats;