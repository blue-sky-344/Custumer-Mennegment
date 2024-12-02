import { paymentType } from "./enums"
export interface Expense{
    date?:Date
    sum?:number
    supplier?:string
    payment?: paymentType
    details?:string

}