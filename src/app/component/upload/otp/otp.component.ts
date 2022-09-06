import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CONTACT_EMAIL } from 'src/app/objects/app.constant';
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import { ConnectService } from 'src/app/services/connect.service';
import { EmailNotify } from 'src/app/objects/email.notify';
import { ReturnDTO } from 'src/app/objects/return.dto';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() documentFG: FormGroup = new FormGroup({});

  @Input() clientName: string = '';
  @Input() clientEmail: string = '';

  @Output() resendOTP: EventEmitter<any> = new EventEmitter();
  @Output() verifyOTP: EventEmitter<any> = new EventEmitter();

  contactEmail: string = CONTACT_EMAIL;

  inputOptions = {
    a: 'I am not the policyholder indicated',
    b: 'I no longer have access to the email',
  };

  constructor(private conn: ConnectService) {}

  ngOnInit(): void {}

  notifyUs() {
    Swal.fire({
      title: 'Nofify Us',
      input: 'radio',
      inputOptions: this.inputOptions,
      preConfirm: async (inputValue: string) => {
        if (!_.isEmpty(inputValue)) {
          let result: any = {};
          result.option = inputValue;
          return result;
        } else {
          Swal.fire({
            title: 'Selection is Required',
            text: 'Please choose from the options',
            icon: 'warning',
          });
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.option == 'a') {
          const details = new EmailNotify();
          details.documentCode = this.documentFG.get('documentCode')?.value;
          details.documentType = this.documentFG.get('documentType')?.value;
          details.option = 'a';
          this.conn.notifyUs(details).then((res: ReturnDTO) => {
            if (res.status) {
              this.successNotification();
            } else {
              this.systemError();
            }
          });
        } else {
          this.updateEmail();
        }
      } else {
        this.warningError();
      }
    });
  }

  updateEmail() {
    Swal.fire({
      title: 'Submit your New Email Address',
      input: 'text',
      inputPlaceholder: 'Email',
      inputAttributes: {
        autocapitalize: 'off',
      },
      text: 'To update your information, please enter your email address below.',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (inputValue: string) => {
        if (!_.isEmpty(inputValue)) {
          let result: any = {};
          result.email = inputValue;
          return result;
        } else {
          Swal.fire({
            title: 'Input Required',
            text: 'Please submit your email address.',
            icon: 'warning',
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const details = new EmailNotify();
        details.documentCode = this.documentFG.get('documentCode')?.value;
        details.documentType = this.documentFG.get('documentType')?.value;
        details.email = result.value.email;
        details.option = 'b';

        this.conn.updateEmail(details).then((res: ReturnDTO) => {
          if (res.status) {
            this.successNotification();
          } else {
            this.systemError();
          }
        });
      } else {
        this.warningError();
      }
    });
  }

  successNotification() {
    Swal.fire({
      title: 'Thank you for notifying us!',
      text: 'We have received your concern and will get back to you soon.',
      icon: 'success',
    });
  }

  warningError() {
    Swal.fire({
      title: 'Warning',
      text: 'Request cancelled. Please try again.',
      icon: 'warning',
    });
  }

  systemError() {
    Swal.fire({
      title: 'System Error',
      text: 'Unable to process your request. Please try again.',
      icon: 'error',
    });
  }

  _resendOTP() {
    this.resendOTP.emit();
  }

  _verifyOTP() {
    this.verifyOTP.emit();
  }
}
