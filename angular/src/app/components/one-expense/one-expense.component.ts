import { Component ,Input} from '@angular/core';
import {Expense} from '../../modules/expenses.interface'
import { DatePipe, CommonModule } from '@angular/common';
import {paymentType} from '../../modules/enums'

@Component({
  selector: 'app-one-expencse',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './one-expense.component.html',
  styleUrl: './one-expense.component.scss'
})
export class OneExpenseComponent {
  @Input() expense!:Expense
 
}
