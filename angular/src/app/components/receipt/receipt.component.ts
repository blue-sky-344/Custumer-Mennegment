import { Component, Input } from '@angular/core';
import { Receipt } from '../../modules/receipt.interface';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {
  @Input() receipt!:Receipt
}
