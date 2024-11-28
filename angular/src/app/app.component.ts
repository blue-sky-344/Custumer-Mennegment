import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { Receipt } from './modules/receipt.interface';
import { paymentType } from './modules/enums';
import { ReceiptsComponent } from "./components/receipts/receipts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReceiptComponent, ReceiptsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';

}
