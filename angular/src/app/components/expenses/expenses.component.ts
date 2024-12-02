import { Component ,Input} from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,ValidationErrors,Validators  } from '@angular/forms'
import { Expense } from "../../modules/expenses.interface";
import {paymentType} from '../../modules/enums'
import { CommonModule } from '@angular/common';
import {ApiService} from '../../services/api.service'

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {

    myForm!:FormGroup;
    pymentTypeArray: string[]=Object.values(paymentType);
    constructor(private apiService:ApiService){
      this.myForm=new FormGroup({
        data:new FormControl('',Validators.required),
        sum:new FormControl ('',Validators.required),
        supplier :new FormControl('', [Validators.required  ,Validators.pattern('[A-Za-zא-ת .]*')]),
        payment : new FormControl('',Validators.required),
        details:new FormControl('' ,Validators.pattern('[A-Za-zא-ת .]*')),

      })
    }
    

  
    save() {
     if (this.myForm.valid){
      const {controls}=this.myForm

      let expense:Expense={
        date:controls['date'].value,
        sum:controls['sum'].value,
        supplier :controls['supplier'].value,
        payment : controls['payment'].value,
        details:controls['details'].value
      }

      this.apiService.addExpense(expense).subscribe((response)=>{
             console.log('expense added successfully',response);
      },
    (error)=>{
      console.log('Error adding expense',error);
    }
    )
     }
      };
      getControlErrors(controlName: string): ValidationErrors | null {
        return this.myForm.controls[controlName].errors
      }
    }

 
  

