import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CONTACT_EMAIL } from 'src/app/objects/app.constant';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() clientName: string = '';
  @Input() clientEmail: string = '';

  @Output() resendOTP: EventEmitter<any> = new EventEmitter();
  @Output() verifyOTP: EventEmitter<any> = new EventEmitter();

  contactEmail: string = CONTACT_EMAIL;

  constructor() {}

  ngOnInit(): void {}

  _resendOTP() {
    this.resendOTP.emit();
  }

  _verifyOTP() {
    this.verifyOTP.emit();
  }
}
