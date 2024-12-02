import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer, Receipt } from '../modules/receipt.interface';
import { Expense } from '../modules/expenses.interface';

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





  getExpenseByMonth(month:string):Observable<Array<Expense>>{
    return this.http.get<Array<Expense>>(`${this.baseURL}/Receipts/getExpenseByMonth/${month}`)
  }

  getExpensesByYear(year:string):Observable<Array<Expense>>{
    return this.http.get<Array<Expense>>(`${this.baseURL}/Receipts/getExpensesByYear/${year}`);
  }

  getExpenseBetweenDates(begin:string, end:string):Observable<Array<Expense>>{
    return this.http.get<Array<Expense>>(`${this.baseURL}/Receipts/getExpenseBetweenDates/${begin}/${end}`)
  }

  getExpenseByCustomer(customer:string):Observable<Array<Expense>>{
    return this.http.get<Array<Expense>>(`${this.baseURL}/Receipts/getReceiptsByCustomer/${customer}`)
  }

  addExpense(newexpense: Expense){
    return this.http.post<Expense>(`${this.baseURL}/expense/createexpenses`,
        newexpense, {
        headers: { 'content-type': 'application/json' }
    }
    )
 
    
}

  //expenses
  //todo


}
