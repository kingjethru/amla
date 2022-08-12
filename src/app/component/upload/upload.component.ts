import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  documentFG: FormGroup = new FormGroup({});
  otpFG: FormGroup = new FormGroup({});
  uploadFG: FormGroup = new FormGroup({});
  fg: FormGroup = new FormGroup({});

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.documentFG = this.fb.group({
      documentType: ['', Validators.required],
      documentCode: ['', Validators.required]
    });

    this.documentFG = this.fb.group({
      otp: ['', Validators.required]
    });

    this.documentFG = this.fb.group({
      otp: ['', Validators.required]
    });
  }

}
