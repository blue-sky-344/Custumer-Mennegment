import { Component } from '@angular/core';
import { ReceiptComponent } from "../receipt/receipt.component";
import { Receipt } from '../../modules/receipt.interface';
import { paymentType } from '../../modules/enums';
import { CommonModule } from '@angular/common';
import { ReceiptsService } from '../../services/receipts.service';

@Component({
  selector: 'app-receipts',
  standalone: true,
  imports: [ReceiptComponent, ReceiptComponent, CommonModule],
  templateUrl: './receipts.component.html',
  styleUrl: './receipts.component.scss'
})
export class ReceiptsComponent {
  constructor(private receiptsService:ReceiptsService){
  }
  //template
  receiptsToDisplay: Receipt[]=[{receiptNumber:1, userName:"aam334", ammount:50, date:new Date(), paymentMethod:paymentType.CASH, details:"notebooks"}]
  public receipts:Receipt[]=[];
  public supply():void{
    //this.receipts = this.receiptsService.getAllReceipts();
  }

}
