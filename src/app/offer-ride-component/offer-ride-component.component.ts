import { Component,OnInit } from '@angular/core';
import {AbstractControl, FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})
export class OfferRideComponentComponent implements OnInit{
  contactForm:FormGroup;
  submittedData:any[]=[];
  constructor(private frmBuilder:FormBuilder){}
  ngOnInit(): void {
    this.contactForm=this.frmBuilder.group({
      name:['',Validators.required],
      destination:['',Validators.required],
      slocation:['',Validators.required],
      car:['',Validators.required],
      seatsAvailable: ['',[Validators.required,seatsAvailableValidator]],
    });
  }

  onSubmit(){
    if(this.contactForm?.valid){
      let formData = this.contactForm.value;
      this.submittedData.push(formData);
      this.contactForm.reset();
      alert(
        'Offered a ride,\nName: '+formData.name+ '\nStart Location: '+formData.slocation +'\nDestination: '+formData.destination+ '\nCar: '+formData.car+ '\nSeats: '+formData.seatAvailable);
    }else{
      alert('Form is inalid');
    }
  }
}
function seatsAvailableValidator(
  control:AbstractControl
):{ [key: string]: boolean} | null{
  if(
    control.value !== undefined &&
    (isNaN(control.value)|| control.value<=0 || control.value>=8)
  ){
    return {seatsAvailableRange:true};
  }
  return null;
}

