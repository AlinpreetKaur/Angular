import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling-comp-b',
  templateUrl: './sibling-comp-b.component.html',
  standalone:true,
  imports:[],
  styleUrl: './sibling-comp-b.component.css'
})
export class SiblingCompBComponent implements OnInit {
message = '';
constructor(private service:CommonService){

}
ngOnInit(){
this.service.message.subscribe((data:string)=>{
  this.message = data
})
}
}
