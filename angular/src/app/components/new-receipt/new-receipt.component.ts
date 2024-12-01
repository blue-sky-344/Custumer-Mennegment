import { Component, OnInit, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../modules/receipt.interface';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators,ValidationErrors ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-new-receipt',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './new-receipt.component.html',
  styleUrl: './new-receipt.component.scss'
})
export class NewReceiptComponent implements OnInit {
  constructor(){ }

  ngOnInit(): void {
    
  }

  allCustomers!: Array<Customer>;
  newCustomer=false;
}
