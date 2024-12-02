import { Component } from '@angular/core';
import { Expense } from "../../modules/expenses.interface";
import {OneExpenseComponent} from '../one-expense/one-expense.component'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-expenses',
  standalone: true,
  imports: [OneExpenseComponent,CommonModule],
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.scss'
})
export class ListExpensesComponent {

public listOfExpenses: Expense[]=[
  {
    date: undefined,
    sum: undefined,
    supplier: '',
    payment: undefined,
    details: ''
  },
  {
    date: undefined,
    sum: undefined,
    supplier: '',
    payment: undefined,
    details: ''
  }
]



}
