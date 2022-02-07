import { Products } from "./products";
import { Users } from "./users";

export interface Commandes {
    id?:number
    date:string,
    mntTotal:number
    isPayed:boolean
    isLivred:boolean
    client : Users
    products :Products[]
}
