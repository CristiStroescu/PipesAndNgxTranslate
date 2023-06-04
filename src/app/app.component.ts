import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework3';
  language: string='en';
  
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  onLanguageSelect() {
    this.translate.use(this.language);
  }
}
