import { Injectable } from '@angular/core';
import { Receipt } from '../modules/receipt.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {

  private _receiptList!:Receipt[];

  public getAllReceipts():Observable<Receipt[]>{
      // observable: Observable = new Observable((observer)=>{
      //   observer.next("working")
      // })
      return this.observable;
  }

  public setReceipts(receipts:Receipt[]):void{
    this._receiptList = [...receipts,...this._receiptList];
  }

  constructor() { }

  public observable !:Observable<any>
}
