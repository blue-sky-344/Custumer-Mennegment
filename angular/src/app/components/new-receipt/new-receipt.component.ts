import { Component, OnInit, ChangeDetectorRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer, Receipt } from '../../modules/receipt.interface';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators,ValidationErrors ,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { paymentType } from '../../modules/enums';
import { response } from 'express';
import { log } from 'console';
@Component({
  selector: 'app-new-receipt',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './new-receipt.component.html',
  styleUrl: './new-receipt.component.scss'
})
export class NewReceiptComponent implements OnInit {

  public allCustomers = new Array<Customer>;
  myForm: FormGroup;
  paymentTypesArray: string[] = Object.values(paymentType);
  customerError=false;

  constructor(private apiService:ApiService, private cdr:ChangeDetectorRef){
    this.myForm=new FormGroup({
      customer: new FormControl('',[Validators.required]),
      date: new FormControl('', [Validators.required]),
      sum: new FormControl('', [Validators.required]),
      payment: new FormControl('', [Validators.required]),
      newCustomer: new FormControl(),
      newCustomerUserName: new FormControl(),
      newCustomerName: new FormControl('',[ Validators.pattern('[A-Za-zא-ת .]*')]),
      newCustomerphone:new FormControl('',[Validators.pattern('0-9')]),
      details: new FormControl()

    })

    this.myForm.get('newCustomer')?.valueChanges.subscribe(val => {
      if (val) { 
        this.myForm.get('newCustomerUserName')?.setValidators(Validators.required);
        this.myForm.get('newCustomerName')?.setValidators(Validators.required);
        this.myForm.get('newCustomerphone')?.setValidators(Validators.required);
        this.myForm.get('customer')?.clearValidators();
      } 
     else{
      this.myForm.get('newCustomerUserName')?.clearValidators();
      this.myForm.get('newCustomerName')?.clearValidators();
      this.myForm.get('newCustomerphone')?.clearValidators();
      this.myForm.get('customer')?.setValue(Validators.required)

     }
      this.myForm.get('newCustomerUserName')?.updateValueAndValidity();
      this.myForm.get('newCustomerName')?.updateValueAndValidity();
      this.myForm.get('newCustomerphone')?.updateValueAndValidity();
      this.myForm.get('customer')?.updateValueAndValidity();
  });
   }

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
    if(this.myForm.valid){
      const{controls} = this.myForm;
      
      let scustomer = controls['customer'].value;
      if(controls['newCustomer'].value===true){
        
        console.log(controls)
          let customer: Customer={
            useName:controls['newCustomerUserName'].value,
            name:controls['newCustomerName'].value,
            phone:controls['newCustomerphone'].value
          }
          console.log(customer)
          this.apiService.addCustomer(customer).subscribe((response)=>{
            console.log("customer added successfully",customer)
            scustomer = customer.useName;
            this.customerError=false;
          },(error)=>{
          this.customerError=true;
        }
        )


      }if(!this.customerError){
      
      let receipt:Receipt = {
          userName:scustomer,
          date:controls['date'].value,
          ammount:controls['amount'].value,
          paymentMethod: controls['paymentMethod'].value,
          details:controls['details'].value
      }

      this.apiService.addReceipt(receipt).subscribe((response)=>{
        console.log('Receipt added successfully',response);
      },
      (error)=>{
        console.log('Error adding receipt:',error);
      }
      )
          
        }}
      }
      
    

  

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.myForm.controls[controlName].errors ? this.myForm.controls[controlName].errors:null
  
  }
  //newCustomer=false;
}

