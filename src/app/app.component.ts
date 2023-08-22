import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'PoolCarz';
  contactForm:FormGroup;
  submittedData:any[]=[];
  constructor(private frmBuilder:FormBuilder){}
  ngOnInit(): void {
    this.contactForm=this.frmBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',Validators.required],
    });
}
}