import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { Receipt } from './modules/receipt.interface';
import { paymentType } from './modules/enums';
import {ExpensesComponent} from "./components/expenses/expenses.component"
import {OneExpenseComponent} from './components/one-expense/one-expense.component'
import { ListExpensesComponent } from "./components/list-expenses/list-expenses.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReceiptComponent,ExpensesComponent,OneExpenseComponent,ListExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';

  //template
  listOfReceipts:Receipt[]=[{receiptNumber:1, userName:"aam334", ammount:50, date:new Date(), paymentMethod:paymentType.CASH, details:"notebooks"}]
}
