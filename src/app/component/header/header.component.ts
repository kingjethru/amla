import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  brand: String = '';
  cssUrl: String = '';
  brandLogo: String = '';
  brandSite: String = '';
  isBranded: boolean = false;
  homepage: string = environment.homePage;

  ngOnInit(): void {
  }

}
