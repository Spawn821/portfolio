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
      description: `
        Task manager inpired by the Kanban System. Create and
        organize tasks using drag functions, assign users and
        categories.
      `,
      'live-test': '...',
      github: '...'
    },
    {
      img: './../../../assets/graphics/portfolio/pollo-loco.png',
      headline: 'Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: `
        Jump, run and throw game based on object-oriented approach.
        Help Pepe fo find coins and tabasco salsa to fight against the 
        crazy hen.
      `,
      'live-test': '...',
      github: '...'
    }
  ]
}
