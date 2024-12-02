import { Injectable } from '@angular/core';
import { Receipt } from '../modules/receipt.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {
  
  private receiptsByMonthURL="http://localhost:3000/receipts/getReceiptsByMonth"
  constructor(private http:HttpClient) {  }

  private _receiptList!:Receipt[];

  getReceipts() :Observable<Receipt[]>{
    return this.http.get<Receipt[]>(`${this.receiptsByMonthURL}/5`);
  }

  // public getAllReceipts():Observable<Receipt[]>{
  //     // observable: Observable = new Observable((observer)=>{
  //     //   observer.next("working")
  //     // })
  //     return this.observable;
  // }

  public setReceipts(receipts:Receipt[]):void{
    this._receiptList = [...receipts,...this._receiptList];
  }

 

  public observable !:Observable<any>
}
