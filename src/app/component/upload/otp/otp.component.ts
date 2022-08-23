import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Output() resendOTP: EventEmitter<any> = new EventEmitter();
  @Output() verifyOTP: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  _resendOTP() {
    this.resendOTP.emit();
  }

  _verifyOTP() {
    this.verifyOTP.emit();
  }
}
