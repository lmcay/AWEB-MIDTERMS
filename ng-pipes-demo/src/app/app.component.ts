import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs';
import { MyServiceService } from './my-service.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'pipes-demo';
  presentDate = new Date(); 
  time$ = interval(1000).pipe(
    map(() => new Date())
  );
  testObject = {
    name: 'Carl',
    age: 21,
    food: 'Cheesecake'
  };
  testArray = [1,2,3,4,5,6];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  todaydate;
  componentproperty;
  constructor(private myservice:MyServiceService){
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
