import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VERSION } from 'src/app/objects/app.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  version: string = VERSION;

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
