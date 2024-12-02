import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { Receipt } from './modules/receipt.interface';
import { paymentType } from './modules/enums';
<<<<<<< HEAD
import {ExpensesComponent} from "./components/expenses/expenses.component"
import {OneExpenseComponent} from './components/one-expense/one-expense.component'
import { ListExpensesComponent } from "./components/list-expenses/list-expenses.component";
import { ReceiptsComponent } from "./components/receipts/receipts.component";



=======
import { ReceiptsComponent } from "./components/receipts/receipts.component";
import { Observable } from 'rxjs';
import { NewReceiptComponent } from "./components/new-receipt/new-receipt.component";
>>>>>>> 79b1f288d02cf18efe7fb9cfba5f0c8c1493cc68

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, ReceiptComponent, ExpensesComponent, OneExpenseComponent, ListExpensesComponent, ReceiptsComponent],
=======
  imports: [ReceiptComponent, ReceiptsComponent,NewReceiptComponent],
>>>>>>> 79b1f288d02cf18efe7fb9cfba5f0c8c1493cc68
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  public obsevable:Observable<any> = new Observable((observer)=>{
    
  })

}
