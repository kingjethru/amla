import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  @Output() upload: EventEmitter<any> = new EventEmitter();

  constructor() {}

  showIDList: boolean = false;
  hasFile: boolean = false;

  uploadFile: any = null;

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    this.uploadFile = event.target.files[0] ?? null;
    this.hasFile = true;
    this.selectedFile.emit(this.uploadFile);
  }

  _upload() {
    this.upload.emit();
  }
}
