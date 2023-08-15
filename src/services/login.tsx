
import { api } from "./api";

export const login = async (email: string): Promise<boolean> => {
    const data: any = await api 
    return email !== data.email ? false : true;
}
