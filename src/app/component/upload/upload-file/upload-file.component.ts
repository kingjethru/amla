import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() clientName: string = '';
  @Input() clientEmail: string = '';

  @Output() selectedFile: EventEmitter<any> = new EventEmitter();
  @Output() selectedKYCFile: EventEmitter<any> = new EventEmitter();

  @Output() upload: EventEmitter<any> = new EventEmitter();

  constructor() {}

  showIDList: boolean = false;
  hasFile: boolean = false;
  uploadFile: any = null;

  hasKYCFile: boolean = false;
  uploadKYCFile: any = null;

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file = event.target.files[0] ?? null;
    if (file) {
      if (file.size > 10000000) {
        Swal.fire({
          icon: 'warning',
          title: 'File Limit Exceeds',
          html: "File limit is not more than 10MB size"
        });
      } else {
        this.uploadFile = file;
        this.hasFile = true;
        this.selectedFile.emit(this.uploadFile);
      }
    }
  }

  onKYCFileSelected(event: any): void {
    const file = event.target.files[0] ?? null;
    if (file) {
      if (file.size > 10000000) {
        Swal.fire({
          icon: 'warning',
          title: 'File Limit Exceeds',
          html: "File limit is not more than 10MB size"
        });
      } else {
        this.uploadKYCFile = file;
        this.hasKYCFile = true;
        this.selectedKYCFile.emit(this.uploadKYCFile);
      }
    }
  }

  _upload() {
    this.upload.emit();
  }
}
