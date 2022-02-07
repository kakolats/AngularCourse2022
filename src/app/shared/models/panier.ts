import { Products } from "./products";
import { Users } from "./users";

export interface Panier {
    client?: Users
    products:Products[]
}
