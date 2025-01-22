import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [],
  templateUrl: './new-cmp.component.html',
  styleUrl: './new-cmp.component.css'
})
export class NewCmpComponent {
  todaydate;
  newcomponent = 'Entered in new component!'
  componentproperty;
  constructor(private myservice:MyServiceService){
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = 'Component Created';
    this.componentproperty = this.myservice.serviceproperty;
  }
}
