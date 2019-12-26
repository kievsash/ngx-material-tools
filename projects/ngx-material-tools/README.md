# NgxMaterialToolsDemo

#### This is a set of custom directives lib for Angular Materials.

For now it contains only *matInputCommified* directive to be used with standard material matInput.

## How to use

### Install
```
npm i ngx-material-tools
```

### Import module

```
...
import {NgxMaterialToolsModule} from 'ngx-material-tools';

@NgModule({
...
  imports: [
...
    NgxMaterialToolsModule
  ],
...
})
export class AppModule { }
```

### Use directive together with matInput in Angular Reactive Forms 
```
  <form [formGroup]="myForm" style="margin-top: 20px">
    <mat-form-field appearance="outline">
      <mat-label>Deposit Amount</mat-label>
      <input matInput
             matInputCommified
             formControlName="deposit"
             type="text"/>
    </mat-form-field>
  </form>
>
```

### Start demo project

Clone this repo and do install

```
npm install

ng serve
```
![demo app](src/inputExampleGif2.gif)


Did you Like this lib? Follow me on [Twitter](https://twitter.com/El_Extremal) for more Angular and RxJS staff!

Need a mentorship for Angular and RxJS? Find me on [codementor.io](https://www.codementor.io/alexanderposhtaruk)

Take a look at my video-course on Udemy/PacktPub:
* ["Hands-on RxJS for Web Development"](https://www.packtpub.com/web-development/hands-rxjs-web-development-video)
* ["RxJS unit testing for Angular apps"](https://www.udemy.com/course/rxjs-unit-testing-in-angular-application-the-whole-picture/)

Check my Youtube video-blog ["Angular can waste your time!"](https://www.youtube.com/playlist?list=PLNadw4d8-KMVSOffiYBuOlzvF38sO9pdu)



*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.


