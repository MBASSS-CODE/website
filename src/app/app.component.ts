import { Component } from '@angular/core';
import { WebsiteTheme } from 'src/utility/websiteTheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDarkTheme: boolean = false;

  constructor(
    public websiteTheme: WebsiteTheme
  ){}

  ngOnInit(): void {
    this.websiteTheme.themeOnInitCheck();
  }

}
