import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  rfFormUpdate:FormGroup;
  current:Employee;
  constructor(private _emp:EmployeeService) {
   }
  ngOnInit(): void {
    this.rfFormUpdate=new FormGroup({
        id:new FormControl(),
        name:new FormControl('',Validators.required),
        age:new FormControl('',Validators.min(1)),
        address:new FormControl(),
        years:new FormControl('',Validators.min(1))
    });

    this._emp.$dataUpdate.subscribe(
      (val:Employee)=>{
        this.current=val;
        this.rfFormUpdate.patchValue(this.current);
      }
    );
  }

  onSubmit()
  {
    if(window.confirm('Are you sure want to update?'))
    {
      if (this.rfFormUpdate.invalid) {
        return;
    }
      let empEdit=new Employee();
      empEdit=this.rfFormUpdate.value;
      this._emp.updateEmp(empEdit);
    }
  }

}
