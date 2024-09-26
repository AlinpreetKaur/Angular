import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sibling-comp',
  templateUrl: './sibling-comp.component.html',
  standalone:true,
  imports:[FormsModule],
  styleUrl: './sibling-comp.component.css'
})
export class SiblingCompComponent {
 data ='';

constructor(private service:CommonService){

}
sendData() {
this.service.sendMessage(this.data);
}
}
