import {Directive} from "@angular/core";
import {FormGroup, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useValue: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator{
  validate(control: FormGroup): { [key: string]: any } | null {
    let addressControl = control.controls['address'];
    let cityControl = control.controls['city'];
    let countryControl = control.controls['country'];
    let onlineUrlControl = (<FormGroup>control.root).controls['onlineUrl'];

    if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value ) || onlineUrlControl && onlineUrlControl.value){
      return null
    }
    else {
      return {validateLocation: false}
    }
  }

}
