import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

export class FormHelper {
    
    static markAllAsTouched(formGroup: UntypedFormGroup):boolean {
        Object.values(formGroup.controls).forEach((control:any) => {
            control.markAsTouched();
            control.updateValueAndValidity();

            if(control.controls){
                FormHelper.markAllAsTouched(control as UntypedFormGroup);
            }
        });

        return formGroup.valid;
    } 

}