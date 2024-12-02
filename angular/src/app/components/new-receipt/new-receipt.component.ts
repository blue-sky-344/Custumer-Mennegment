import { Component, OnInit, ChangeDetectorRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../modules/receipt.interface';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators,ValidationErrors ,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../../api.service';
import { paymentType } from '../../modules/enums';
@Component({
  selector: 'app-new-receipt',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './new-receipt.component.html',
  styleUrl: './new-receipt.component.scss'
})
export class NewReceiptComponent implements OnInit {

  public allCustomers = new Array<Customer>;
  myForm! : FormGroup;
  paymentTypesArray: string[] = Object.values(paymentType);
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
  
  save(){

  }

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.myForm.controls[controlName].errors
  
  }
  //newCustomer=false;
}

