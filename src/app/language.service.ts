import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() {
  }

  languageList = {
    'header': {
      'german': [
        'Über mich',

        'Fähigkeiten',

        'Portfolio'
      ],

      'english': [
        'About',

        'My skills',

        'Portfolio'
      ]
    },

    'above-the-fold': {
      'german': [
        'Ich bin',
        'FRONTEND ENTWICKLER',
        'Lass uns reden!'
      ],

      'english': [
        'I am',
        'FRONTEND DEVELOPER',
        'Let\'s talk!'
      ],
    },

    'about-me': {
      'german': [
        'Über mich',

        'Hallo, ich bin Frontend-Entwickler mit Sitz in Gotha Thüringen.\n' +
        'Seit einigen Monaten mache ich eine Weiterbildung zum Webentwickler.\n' +
        'Ich habe an vielen Projekten gearbeitet, von einfachen Webseiten bis\n' +
        'hin zu komplexen Webanwendungen. Selbst ein kleines Spiel habe ich programmiert.\n' +
        'Ich habe mit einigen Programmiersprachen und -technologien gearbeitet\n' +
        '(siehe hierzu den \'My skills\'-Abschnitt). Ich arbeitete alleine wie auch im Team\n' +
        '(siehe hierzu den \'Portfolio\'-Abschnitt). Ich war steht\'s Teil einer großen Community\n' +
        'von gleichgesinnten und bekam regelmäßige Codereviews von erfahrenen Programmierern.',

        'Ich bin ein offenherziger Mensch und versuche steht\'s mein Team zu unterstützen\n' +
        'und lasse mich von meinen Kollegen gerne inspirieren.\n' +
        'Ein weing Spaß gehört für mich auch immer zur Arbeit dazu.\n' +
        'Eine entspannte Arbeitsatmussphäre ist mir sehr wichtig.',

        'Mein Ehrgeiz pakt mich oft und treibt mich an, eine Lösung für ein Problem zu finden.\n' +
        'Dabei kann es schonmal passieren das ich mich an einer Sache festbeiße.\n' +
        'Weiterentwicklung ist für mich unumgänglich, wie auch die Werkzeuge die ich nutze.'
      ],

      'english': [
        'About me',

        'Hello, I am a frontend developer based in Gotha Thuringia.\n' +
        'I have benn training to become a web developer for a few months now.\n' +
        'I have worked on many projects, from simple websites to complex web applications.\n' +
        'I have even programmed a small game. I have worked with several programming languages and\n' +
        'technologies (see the \'My skills\' section). I worked alone as well in a team (see the \'Portfolio\' section).\n' +
        'I was part of a large community of like-minded people and received code reviews from experienced programmers.',

        'I am an open-hearted person and always try to support my team and like to be inspired by my colleagues.\n' +
        'For me, a bit of fun is always part of the job. A relaxed working atmosphere is very important to me.',

        'My ambition often spurs me on and drives me to find a solution to a problem.\n' +
        'It can sometimes happen that I get stuck on something.\n' +
        'Further development is essential for me, as are the tools I use.'
      ]
    },

    'my-skills': {
      'german': [
        'Meine Fähigkeiten',

        'Ich habe mit einige Sprachen und Technologien gearbeitet. Angefangen von Statik mit HTML,\n' +
        'customizing mit CSS, bishin zur Dynamik mit JavaScript. Desweiteren Arbeitete ich mit der API\n' +
        'Schnittstelle und Datenbankanbindung über Firebase. Die Versionsverwaltung über GIT war ein\n' +
        'ständiger Begleiter. Scrum gab mir viel Freiraum in der Planung und Struktur, von den ersten\n' +
        'Zeilen in jedem Projekt, bishin zum Release. In TypeScript lernte ich mit Datentypen umzugehen\n' +
        'und meinen Code konsistenter und sicherer zu machen. Auch einige Schritte machte ich im umgang\n' +
        'mit Material Design und seinen Layouts. Zuletzt lernte ich den Umgang mit dem Framwork Angular.\n' +
        'In dem ich auch diese Website programmiert habe.',

        'Kontaktieren'
      ],

      'english': [
        'My skills',

        'I have worked with several languages and technologies. Starting with statics with HTML, customizing with CSS,\n' +
        'up to dynamic with JavaScript. I also worked with API interface and database connection via Firebase.\n' +
        'Version management via GIT was a constant companion. Scrum gave me a lot of freedom in planning and structure,\n' +
        'from the first lines in each project to the release. In TypeScript, I learned how to deal with data types and\n' +
        'how to make my code more consistent and secure. I also took some steps in dealing with Material Design and its layouts.\n' +
        'Finally, I learned how to use the Angular framework. In which I also programmed this website.',

        'Get in touch'
      ]
    },

    'portfolio': {
      'german': [
        'Entdecken Sie hier eine Auswahl meiner Arbeiten - interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.'
      ],

      'english': [
        'Explore a seclection of my work here - interact with projects to see my skills in action.'
      ]
    },

    'contact': {
      'german': [
        'Kontakt',

        'Haben Sie ein Problem zu lösen?',

        'Kontaktieren Sie mich über dieses Formular.Ich bin interessiert, von Ihnen zu hören,\n' +
        'Ihre Ideen zu kennen und mit meiner Arbeit zu Ihrem Projekt beizutragen.',

        'Brauchen Sie einen Frontend-Entwickler?',

        'Kontaktieren Sie mich!',

        'Vielen Dank für Ihr interesse',

        'Ich freue mich auf ein Gespräch mit Ihnen und',

        'werde mich bald bei Ihnen melden. :D',

        'Ihr Name',

        'Ihre E-Mail',

        'Ihre Nachricht',

        'Ich habe die',

        'Datenschutzerklärung',

        'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',

        'Nachricht senden :)'
      ],

      'english': [
        'Contact',

        'Got a problem to solve?',

        'Contact me through this form, I am interested in hearing from you,\n' +
        'knowing your ideas and contributing to your projects with my work.',

        'Nedd a Frontend developer?',

        'Contact me!',

        'Thanks for your interest',

        'I look forward to talking to you and',

        'will be in touch soon. :D',

        'Your name',

        'Your email',

        'Your message',

        'I\'ve read the',

        'privacy policy',

        'and agree to the processing of my data as outlined.',

        'Send message :)'
      ]
    }
  }
}
