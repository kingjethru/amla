import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utils/utility';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scroll(id: string) {
    Utility.scroll(id);
  }
}
