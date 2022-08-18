import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utility } from 'src/app/utils/utility';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  @Input() formGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}

  goToHomepage() {
    Utility.goToHomepage();
  }
}
