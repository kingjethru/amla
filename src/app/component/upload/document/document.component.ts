import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  @Input() formGroup = new FormGroup({});

  constructor() { }

  documentIdList: any[] = [];

  ngOnInit(): void {
  }

}
