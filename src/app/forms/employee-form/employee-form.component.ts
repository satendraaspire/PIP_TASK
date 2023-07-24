import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { controlNames } from './employee.constant';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm!: FormGroup;
  isvaild= false
  controlNames = controlNames;
    
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ){  }




  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      employees: this.fb.array([this.newEmployee()])
    });
  }

  employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }
  get getemployees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  } 

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      age: ['',Validators.required],
      gender: ['',Validators.required],
      address: ['',Validators.required],
      phoneNumberList: this.fb.array([this.newPhoneNumber()])
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  employeePhoneNumber(i: number): FormArray {
    return this.employees()
      .at(i)
      .get('phoneNumberList') as FormArray;
  }

  newPhoneNumber(): FormGroup {
    return this.fb.group({
      phoneNumber: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10)]],
    });
  }

  addPhoneNumber(i: number) {
    this.employeePhoneNumber(i).push(this.newPhoneNumber());
  }

  onSubmit() {
 
    console.log(this.employeeForm);
  }




}
