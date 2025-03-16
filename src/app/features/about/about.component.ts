import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  expandedIndex: number | null =null; 
  sections = [
    { icon: '🎓', title: 'about.subtitle_education', content: 'about.description1' },
    { icon: '💡', title: 'about.subtitle_approach', content: 'about.approach' },
    { icon: '💼', title: 'about.subtitle_experience', content: 'about.experience' },
    { icon: '⚙️', title: 'about.subtitle_techno', content: 'about.techno' },
    { icon: '🌍', title: 'about.subtitle_beyond_code', content: 'about.beyond_code' }
  ];
  techIcons = [
    { name: 'Angular', img: "images/technologies/favicon.ico", alt: 'Angular Logo' },
    { name: 'Vue.js', img: "images/technologies/vue.png", alt: 'Angular Logo' },
    { name: 'Spring Boot', img: "images/technologies/springBoot.png", alt: 'Spring Logo' },
    { name: 'Spring Batch', img: "images/technologies/springBatch.png", alt: 'Spring Logo' },
    { name: 'Spring Security', img: "images/technologies/springSecurity.png", alt: 'Spring Logo' },
    { name: '.Net Core', img: "images/technologies/dotnet.png", alt: 'Spring Logo' },
    { name: 'J2EE', img: "images/technologies/java.png", alt: 'Spring Logo' },

    { name: 'Flutter', img: "images/technologies/flutter.png", alt: 'Spring Logo' },



  ];
  
  
  
  toggleCard(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}

