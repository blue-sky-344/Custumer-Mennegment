import { paymentType } from "./enums"
export interface Receipt{
    receiptNumber?:number
    userName:string,
    date:Date,
    ammount:number
    paymentMethod?: paymentType
    details:string
}