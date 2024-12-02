import { Component, OnInit, ChangeDetectorRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer, Receipt } from '../../modules/receipt.interface';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators,ValidationErrors ,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { paymentType } from '../../modules/enums';
import { response } from 'express';
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

  constructor(private apiService:ApiService, private cdr:ChangeDetectorRef){
    this.myForm=new FormGroup({
      date: new FormControl('', [Validators.required]),
      sum: new FormControl('', [Validators.required]),
      payment: new FormControl('', [Validators.required]),
      newcustomername: new FormControl('',[Validators.pattern('[A-Za-zא-ת .]*')]),
      newcustomerphone:new FormControl()

    })
   }

  ngOnInit(): void {
   // this.getAllCustomers();
    //this.cdr.detectChanges();
    
  }

  getAllCustomers():void{
    this.apiService.getAllCustomers().subscribe(data=>{
      this.allCustomers=data;
    })
  }
  
  save(){
    if(this.myForm.valid){
      const{controls} = this.myForm;
      if(controls['newCustomer'].value){
          let customer: Customer={
            useName:controls['newCustomerUserName'].value,
            name:controls['newCustomerName'].value,
            phone:controls['newCustomersPhone'].value
          }
          this.apiService.addCustomer(customer).subscribe((response)=>{
            console.log("customer added successfully",customer)
          },(error)=>{
          console.log("error accured",error);}
        )


      }
      
      let receipt:Receipt = {
          userName:controls['customer'].value,
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
          
        }
      }
      
    

  

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.myForm.controls[controlName].errors
  
  }
  //newCustomer=false;
}

