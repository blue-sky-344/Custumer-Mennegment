import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { Receipt } from './modules/receipt.interface';
import { paymentType } from './modules/enums';
import { NewReceiptComponent } from "./components/new-receipt/new-receipt.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReceiptComponent, NewReceiptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';

  //template
  listOfReceipts:Receipt[]=[{receiptNumber:1, userName:"aam334", ammount:50, date:new Date(), paymentMethod:paymentType.CASH, details:"notebooks"}]
}
