import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Output() generateOTP: EventEmitter<any> = new EventEmitter();

  constructor() {}

  documentIdList: any[] = [
    { TIP_DOCUM: 'CLI', NOM_DOCUM: 'INDIVIDUAL' },
    { TIP_DOCUM: 'TIN', NOM_DOCUM: 'CORPORATE' },
  ];
  defaultDocumentCode: string = 'CLI';

  ngOnInit(): void {}

  _generateOTP() {
    this.generateOTP.emit();
  }
}
