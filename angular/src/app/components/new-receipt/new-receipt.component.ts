import { Component, OnInit, ChangeDetectorRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../modules/receipt.interface';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators,ValidationErrors ,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-new-receipt',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './new-receipt.component.html',
  styleUrl: './new-receipt.component.scss'
})
export class NewReceiptComponent implements OnInit {

  public allCustomers = new Array<Customer>;
  constructor(private apiService:ApiService, private cdr:ChangeDetectorRef){ }

  ngOnInit(): void {
    this.getAllCustomers();
    this.cdr.detectChanges();
    
  }

  getAllCustomers():void{
    this.apiService.getAllCustomers().subscribe(data=>{
      this.allCustomers=data;
    })
  }
  
  newCustomer=false;
}
