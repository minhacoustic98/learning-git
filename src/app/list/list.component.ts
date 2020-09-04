import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public _emp:EmployeeService) { }

  ngOnInit(){
    this._emp.getAllEmp();
  }

  onDeleteEmp(id:number)
  {
    if(window.confirm('Are you sure want to delete???'))
    {
      const index=this._emp.listEmp.findIndex(employ=>employ.id===id);
      this._emp.listEmp.splice(index,1);
    }
  }

  onUpdateEmp(id:number)
  {
    this._emp.getSpecificEmp(id);
  }


}
