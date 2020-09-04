import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title="Minh Haui 98"; 
  constructor()
  {
  }

  ngOnInit(){
  }

}
