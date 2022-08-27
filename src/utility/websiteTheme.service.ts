import { OverlayContainer } from "@angular/cdk/overlay";
import { Injectable} from "@angular/core"

@Injectable({
  providedIn: 'root'
})

export class WebsiteTheme {

  isDarkTheme:                boolean;
  themeIcon:                  string;
  matOverlayContainerClass :  any;

  constructor (
    public overlayContainer : OverlayContainer
  ) 
  {}

  dark() {
    this.isDarkTheme = true;
    this.overlayContainer.getContainerElement().classList.add('dark-theme-mode');
    this.themeIcon = 'dark_mode';
  }

  light() {
    this.isDarkTheme = false;
    this.overlayContainer.getContainerElement().classList.remove('dark-theme-mode');
    this.themeIcon = 'light_mode';
  }

  themeOnInitCheck () {
    if (localStorage.getItem('theme') === 'Dark') {
      this.dark();
    } else {
      this.light();
    }
  }

  themeChange (event) {
    if (event.checked) {
      this.dark();
      localStorage.setItem('theme', "Dark");
    } else {
      this.light();
      localStorage.setItem('theme', "Light");
    }
  }
}