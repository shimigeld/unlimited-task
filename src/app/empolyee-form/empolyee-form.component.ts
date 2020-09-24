import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'empolyee-form',
  templateUrl: './empolyee-form.component.html',
  styleUrls: ['./empolyee-form.component.scss']
})
export class EmpolyeeFormComponent implements OnInit {
  empolyeeForm: FormGroup;
  constructor(formBuilder: FormBuilder, private employeeService: EmployeeService) {
      this.empolyeeForm = formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNum: ['', Validators.required]
      });
   }
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.employeeService.addEmoplyee(this.empolyeeForm.value);
    this.empolyeeForm.reset();
  }
}
