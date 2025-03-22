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
    { name: 'Vue.js', img: "images/technologies/vue.png", alt: 'Vue Logo' },
    { name: 'Spring Boot', img: "images/technologies/springBoot.png", alt: 'Spring Boot Logo' },
    { name: 'Spring Batch', img: "images/technologies/springBatch.png", alt: 'Spring Batch Logo' },
    { name: 'Spring Security', img: "images/technologies/springSecurity.png", alt: 'Spring Security Logo' },
    { name: '.Net Core', img: "images/technologies/dotnet.png", alt: '.Net Core Logo' },
    { name: 'J2EE', img: "images/technologies/java.png", alt: 'Java Logo' },
    { name: 'Flutter', img: "images/technologies/flutter.png", alt: 'Flutter Logo' },
    { name: 'Python', img: "images/technologies/python-language.png", alt: 'Python Logo' },
    { name: 'C', img: "images/technologies/c-language.png", alt: 'C Logo' },
    { name: 'C#', img: "images/technologies/c-sharp-language.png", alt: 'C# Logo' },
    { name: 'JavaScript', img: "images/technologies/javascript.png", alt: 'JavaScript Logo' },
    { name: 'TypeScript', img: "images/technologies/typescript.png", alt: 'TypeScript Logo' },
    { name: 'HTML', img: "images/technologies/html.png", alt: 'HTML Logo' },
    { name: 'CSS', img: "images/technologies/css.png", alt: 'CSS Logo' },
    { name: 'Jest', img: "images/technologies/jest.png", alt: 'Jest Logo' },
    { name: 'Jasmine', img: "images/technologies/jasmin.png", alt: 'Jasmine Logo' },
    { name: 'JUnit', img: "images/technologies/junit.png", alt: 'JUnit Logo' },
    { name: 'Gradle', img: "images/technologies/gradle.png", alt: 'Gradle Logo' },
    { name: 'Maven', img: "images/technologies/maven.png", alt: 'Maven Logo' },
    { name: 'Docker', img: "images/technologies/docker.png", alt: 'Docker Logo' },
    { name: 'GitHub', img: "images/technologies/github.png", alt: 'GitHub Logo' },
    { name: 'Jira', img: "images/technologies/jira.png", alt: 'Jira Logo' },
    { name: 'Confluence', img: "images/technologies/confluence.png", alt: 'Confluence Logo' },
    { name: 'Figma', img: "images/technologies/figma.png", alt: 'Figma Logo' },
    { name: 'SQL', img: "images/technologies/sql.png", alt: 'SQL Logo' },
    { name: 'SQL Server', img: "images/technologies/sql-server.png", alt: 'SQL Server Logo' },
    { name: 'Kotlin', img: "images/technologies/kotlin.png", alt: 'Kotlin Logo' },
    { name: 'OCaml', img: "images/technologies/ocaml-language.png", alt: 'OCaml Logo' },
    { name: 'UML', img: "images/technologies/uml.png", alt: 'UML Logo' },
    { name: 'Bambou', img: "images/technologies/bambou.png", alt: 'Bambou Logo' }
  ];
  
  
  
  
  toggleCard(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}

