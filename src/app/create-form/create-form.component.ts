import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  rfFormCreate: FormGroup;
  constructor(private _empService: EmployeeService) {
  }

  ngOnInit(): void {
    this.rfFormCreate = new FormGroup({
      cName: new FormControl('',Validators.required),
      cAge: new FormControl('',Validators.min(1)),
      cAddress: new FormControl('',Validators.required),
      cYears: new FormControl('',Validators.min(1))
    });

    this.rfFormCreate.setValue({
      cName: "name",
      cAge: 1,
      cAddress: '',
      cYears: 1
    });
  }

  onSubmitCreate() {
    if (window.confirm('Are you sure want to add?')) {
      if (this.rfFormCreate.invalid) {
        console.log(this.rfFormCreate);
        return;
    }
      let empAdd = new Employee();
      const val=this.rfFormCreate.value;
      const id=new Date(Date.now()).getTime();
      empAdd.id=id;
      empAdd.name=val.cName;
      empAdd.age=val.cAge;
      empAdd.address=val.cAddress;
      empAdd.years=val.cYears;
      this._empService.addNewEmp(empAdd);
    }

  }

  cancelCreate()
  {
    this.rfFormCreate.reset();
  }

}
