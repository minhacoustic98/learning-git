import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public listEmp: Employee[] = [];
  private apiUrl = "../assets/data/employees.json";
  public dataForm: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(new Employee());
  $dataUpdate = this.dataForm.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  public getAllEmp() {
    return this._httpClient.get<Employee[]>(this.apiUrl).subscribe(
      (response: Employee[]) => {
        this.listEmp = response;
        console.log(this.listEmp);
      }
    );
  }

  public addNewEmp(employee: Employee): void {
      this.listEmp.push(employee);
  }

  public deleteEmp(id: number) {
    if (window.confirm('Are you sure want to delete?')) {
      this.listEmp.splice(id, 1);
    }
  }

  public getSpecificEmp(id: number) {
    const idx = this.listEmp.findIndex(e => e.id === id);
    this.dataForm.next(this.listEmp[idx]); //emit object 
  }

  public updateEmp(empUpdate: Employee) {
    const idx = this.listEmp.findIndex(e => e.id === empUpdate.id);
    this.listEmp.splice(idx, 1, empUpdate)
  }


}
