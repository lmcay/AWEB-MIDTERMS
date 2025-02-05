import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs';
import { MyServiceService } from './my-service.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { of, delay } from 'rxjs';

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

  currentDate = new Date('2024-01-26T15:30:35');
  price = 42.42424242;

  // data = {key: 'value', num: 42};

  // async properties
  arrayStream$ = of([1,2,3,4,5,6]).pipe(delay(1000));

  transformedData$ = of<{ key: string; num: number }>({ key: 'value', num: 42 }).pipe(
    delay(1500),
    map((data: { key: string, num: number }) => `Processed: ${data.key}-${data.num}`)
  );

  combinedAsync$ = of<{ status: string; num: number }>({ status: 'Active', num: 42 }).pipe(
    delay(2000),
    map((data: { status: string, num: number }) => `Status: ${data.status}`)
  );
  


  //json properties
  nestedArrays = {
    data: [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],
    metadata: {type: 'matrix'}
  };

  complexData = {
    id: 1,
    details: {
      name: 'Complex Object',
      properties: {
        color: 'blue',
        size: 'large',
        features: ['a', 'b', 'c']
      }
    }
  }

  mixedTypes = {
    string: 'text',
    number: 42,
    boolean: true,
    array: [1, 'two', false],
    nested: { key: 'value'}
  };

  numbers = [1,2,3,4,5,6,7,8,9,10];
  longString = 'Hello World!';
  objectArray = [
    {id: 1, name: 'First'},
    {id: 2, name: 'Second'},
    {id: 3, name: 'Third'},
    {id: 4, name: 'Fourth'},
  ]



  constructor(private myservice:MyServiceService){
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
// function delay(arg0: number): any {
//   throw new Error('Function not implemented.');
// }

