import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CONTACT_EMAIL, CONTACT_GLOBE, CONTACT_HOTLINE, CONTACT_SMART } from 'src/app/objects/app.constant';
import { OTP } from 'src/app/objects/otp';
import { ReturnDTO } from 'src/app/objects/return.dto';
import { ConnectService } from 'src/app/services/connect.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private fb: FormBuilder, private conn: ConnectService) {}

  @ViewChild('stepper') private stepper?: MatStepper;

  selectedFile: any = null;
  clientName: string = '';
  clientEmail: string = '';

  documentFG: FormGroup = new FormGroup({});
  otpFG: FormGroup = new FormGroup({});
  uploadFG: FormGroup = new FormGroup({});
  fg: FormGroup = new FormGroup({});

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.documentFG = this.fb.group({
      documentType: ['', Validators.required],
      documentCode: ['', Validators.required],
    });

    this.otpFG = this.fb.group({
      otp: ['', Validators.required],
    });

    this.uploadFG = this.fb.group({
      filename: ['', null],
    });
  }

  getSelectedFile(evt: any) {
    this.selectedFile = evt;
  }

  generateErrorMessage(message?: string) {
    return '<p>' + message + '</p>'
    + '</ br>'
    + '<p>Please contact us:</p>'
    + '<p>Hotline: <strong>'+ CONTACT_HOTLINE +'</strong></p>'
    + '<p>Smart: <strong>'+ CONTACT_SMART +'</strong></p>'
    + '<p>Globe: <strong>'+ CONTACT_GLOBE +'</strong></p>'
    + '<p>Email: <strong>'+ CONTACT_EMAIL +'</strong></p>';
  }

  generateOTP() {
    if (this.stepper) {
      const otp = new OTP();
      otp.documentCode = this.documentFG.get('documentCode')?.value;
      otp.documentType = this.documentFG.get('documentType')?.value;

      this.conn.generateOTP(otp).then((result: ReturnDTO) => {
        if (result.status) {
          this.clientName = result.obj["clientName"];
          this.clientEmail = result.obj["clientEmail"];
          
          this.stepper?.next();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: this.generateErrorMessage(result.message)
          });
        }
      });
    }
  }

  resendOTP() {
    if (this.stepper) {
      const otp = new OTP();
      otp.documentCode = this.documentFG.get('documentCode')?.value;
      otp.documentType = this.documentFG.get('documentType')?.value;

      this.conn.resendOTP(otp).then((result: ReturnDTO) => {
        if (result.status) {
          this.clientName = result.obj["clientName"];
          this.clientEmail = result.obj["clientEmail"];

          Swal.fire({
            icon: 'success',
            title: 'Successfully Sent One-Time Password',
            html: result.message,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: this.generateErrorMessage(result.message)
          });
        }
      });
    }
  }

  verifyOTP() {
    if (this.stepper) {
      const otp = new OTP();
      otp.documentCode = this.documentFG.get('documentCode')?.value;
      otp.documentType = this.documentFG.get('documentType')?.value;
      otp.otp = this.otpFG.get('otp')?.value;

      this.conn.verifyOTP(otp).then((result: ReturnDTO) => {
        if (result.status) {
          const status = result.obj;
          if (status == '1') {
            this.stepper?.next();
          } else if (status == '2') {
            Swal.fire({
              icon: 'error',
              title: 'Invalid OTP',
              html: result.message,
            });
          } else {
            Swal.fire({
              icon: 'warning',
              title: 'Expired OTP',
              html: result.message,
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: this.generateErrorMessage(result.message)
          });
        }
      });
    }
  }

  upload() {
    const _this = this;
    if (_this.stepper) {
      const fd = new FormData();
      if (this.selectedFile != null) {
        fd.append('file', this.selectedFile);
      }
      fd.append('documentCode', this.documentFG.get('documentCode')?.value);
      fd.append('documentType', this.documentFG.get('documentType')?.value);
      fd.append('otp', this.otpFG.get('otp')?.value);

      this.conn.upload(fd).then((result: ReturnDTO) => {
        if (result.status) {
          const proceed = result.obj;
          if (proceed) {
            _this.stepper?.next();
          } else {
            Swal.fire({
              icon: 'warning',
              title: 'Unable to Upload ID',
              html: result.message,
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: this.generateErrorMessage(result.message)
          });
        }
      });
    }
  }
}
