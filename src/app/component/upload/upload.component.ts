import { Component, OnInit, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
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
      filename: ['', Validators.required],
    });
  }

  getSelectedFile(evt: any) {
    this.selectedFile = evt;
  }

  generateOTP() {
    if (this.stepper) {
      const otp = new OTP();
      otp.documentCode = this.documentFG.get('documentCode')?.value;
      otp.documentType = this.documentFG.get('documentType')?.value;

      this.conn.generateOTP(otp).then((result: ReturnDTO) => {
        if (result.status) {
          this.stepper?.next();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: result.message,
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
          this.stepper?.next();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: result.message,
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
          this.stepper?.next();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: result.message,
          });
        }
      });
    }
  }

  upload() {
    if (this.stepper) {
      const fd = new FormData();
      if (this.selectedFile != null) {
        fd.append('file', this.selectedFile);
      }
      fd.append('documentCode', this.documentFG.get('documentCode')?.value);
      fd.append('documentType', this.documentFG.get('documentType')?.value);
      fd.append('otp', this.otpFG.get('otp')?.value);

      this.conn.upload(fd).then((result: ReturnDTO) => {
        if (result.status) {
          this.stepper?.next();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'System Error',
            html: result.message,
          });
        }
      });
    }
  }
}
