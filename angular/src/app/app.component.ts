import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { Receipt } from './modules/receipt.interface';
import { paymentType } from './modules/enums';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReceiptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';

  //template
  listOfReceipts:Receipt[]=[{receiptNumber:1, userName:"aam334", ammount:50, date:new Date(), paymentMethod:paymentType.CASH, details:"notebooks"}]
}