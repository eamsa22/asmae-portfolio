import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  switchLanguage(language: string): void {
    this.translateService.use(language);
  }
}
