import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer, Receipt } from '../modules/receipt.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = "http://localhost:3000"


  constructor(private http:HttpClient) { }

  //customers
  getAllCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.baseURL}/customers/getAllCustomers`);
  }

  addCustomer(newCustomer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.baseURL}/customer/addCustomer`,newCustomer,
      {headers:{ 'content-type': 'application/json' }}
    );
  }

  //receipts

  getReceiptsByMonth(month:string):Observable<Array<Receipt>>{
    return this.http.get<Array<Receipt>>(`${this.baseURL}/Receipts/getReceiptsByMonth/${month}`)
  }

  getReceiptsByYear(year:string):Observable<Array<Receipt>>{
    return this.http.get<Array<Receipt>>(`${this.baseURL}/Receipts/getReceiptsByYear/${year}`);
  }

  getReceiptsBetweenDates(begin:string, end:string):Observable<Array<Receipt>>{
    return this.http.get<Array<Receipt>>(`${this.baseURL}/Receipts/getReceiptsBetweenDates/${begin}/${end}`)
  }

  getReceiptsByCustomer(customer:string):Observable<Array<Receipt>>{
    return this.http.get<Array<Receipt>>(`${this.baseURL}/Receipts/getReceiptsByCustomer/${customer}`)
  }

  addReceipt(receipt:Receipt):Observable<Receipt>{
    return this.http.post<Receipt>(`${this.baseURL}/receipts/issuignReceipt`,receipt)
  }

  //expenses
  //todo


}
