import { Component, OnInit } from '@angular/core';
import {
  SOC_MED_FACEBOOK,
  SOC_MED_INSTAGRAM,
  SOC_MED_LINKEDIN,
  SOC_MED_TWITTER,
  SOC_MED_YOUTUBE,
} from 'src/app/objects/app.constant';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  socMedFacebook: string = SOC_MED_FACEBOOK;
  socMedTwitter: string = SOC_MED_TWITTER;
  socMedInstagram: string = SOC_MED_INSTAGRAM;
  socMedYoutube: string = SOC_MED_YOUTUBE;
  socMedLinkedin: string = SOC_MED_LINKEDIN;

  homepage: string = environment.homePage;

  ngOnInit(): void {}
}
