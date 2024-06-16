import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor() { }

  projectlist = [
    {
      img: './../../../assets/graphics/portfolio/join.png',
      headline: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Drag-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      runOn: 'Chrom, Edge und Firefox',
      liveTest: 'https://join.stephan-schmidt-web-developer.de',
      github: 'https://github.com/Spawn821/project_join_own_version'
    },
    {
      img: './../../../assets/graphics/portfolio/pollo-loco.png',
      headline: 'Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückten Hühner zu kämpfen.',
      runOn: 'Chrom, Edge und Firefox',
      liveTest: 'https://el-pollo-loco.stephan-schmidt-web-developer.de',
      github: 'https://github.com/Spawn821/project_el_pollo_loco'
    }
  ]
}
