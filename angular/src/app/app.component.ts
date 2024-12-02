import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { Receipt } from './modules/receipt.interface';
import { paymentType } from './modules/enums';
// import {ExpensesComponent} from "./components/expenses/expenses.component"
import {OneExpenseComponent} from './components/one-expense/one-expense.component'
import { ListExpensesComponent } from "./components/list-expenses/list-expenses.component";



import { ReceiptsComponent } from "./components/receipts/receipts.component";
import { Observable } from 'rxjs';
import { NewReceiptComponent } from "./components/new-receipt/new-receipt.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReceiptComponent, OneExpenseComponent, ListExpensesComponent, ReceiptsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  public obsevable:Observable<any> = new Observable((observer)=>{
    
  })

}
