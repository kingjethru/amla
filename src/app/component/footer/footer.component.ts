import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CONTACT_EMAIL,
  CONTACT_GLOBE,
  CONTACT_HOTLINE,
  CONTACT_SMART,
  SOC_MED_FACEBOOK,
  SOC_MED_INSTAGRAM,
  SOC_MED_LINKEDIN,
  SOC_MED_TWITTER,
  SOC_MED_YOUTUBE,
  VERSION,
} from 'src/app/objects/app.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  version: string = VERSION;
  contactHotline: string = CONTACT_HOTLINE;
  contactSmart: string = CONTACT_SMART;
  contactGlobe: string = CONTACT_GLOBE;
  contactEmail: string = CONTACT_EMAIL;

  socMedFacebook: string = SOC_MED_FACEBOOK;
  socMedTwitter: string = SOC_MED_TWITTER;
  socMedInstagram: string = SOC_MED_INSTAGRAM;
  socMedYoutube: string = SOC_MED_YOUTUBE;
  socMedLinkedin: string = SOC_MED_LINKEDIN;

  ngOnInit(): void {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
