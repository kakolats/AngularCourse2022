import { Categories } from "./categories";

export interface Products {
    id?:number,
    name:string,
    description?:string,
    oldPrice:number,
    newPrice?:number,
    qteStock?:number,
    qteSeuil?: number,
    qteCmde?:number,
    isSolde:boolean,
    note?: number,
    categorie:Categories,
    pathImg:string
}
