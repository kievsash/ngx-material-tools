import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-material-tools-demo';

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
