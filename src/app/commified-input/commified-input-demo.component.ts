import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'commified-input-demo',
  templateUrl: './commified-input-demo.component.html',
  styleUrls: ['./commified-input-demo.component.scss']
})
export class CommifiedInputDemoComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  myForm = this.formBuilder.group({
    deposit: ['', [
      Validators.required,
      Validators.min(1),
      Validators.max(1000000)
    ]
    ],
  });

  onSubmit() {
    console.log('form ', this.myForm, this.myForm.get('deposit'));
  }

  onChangeValue() {
    this.myForm.get('deposit').setValue("100000");
  }

  toggleDisable() {
    const control = this.myForm.get('deposit');
    if (control.disabled) {
      control.enable();
    } else {
      control.disable();
    }
  }
}
