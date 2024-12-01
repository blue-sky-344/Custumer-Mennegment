import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { Receipt } from './modules/receipt.interface';
import { paymentType } from './modules/enums';
import { ReceiptsComponent } from "./components/receipts/receipts.component";
import { Observable } from 'rxjs';
import { NewReceiptComponent } from "./components/new-receipt/new-receipt.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReceiptComponent, ReceiptsComponent,NewReceiptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  public obsevable:Observable<any> = new Observable((observer)=>{
    
  })

}
