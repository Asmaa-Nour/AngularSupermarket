import { Iproduct } from "./iproduct";

export interface Iuser {
    email:string;
    password:string;
    products:Iproduct[];
    id:number;
}
