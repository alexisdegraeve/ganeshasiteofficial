import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Persona {
  id: number;
  name: string;
  age: number;
  profession: string;
  goals: string;
  icon: string;
}

@Component({
  selector: 'app-ux-case-ganesha-fit',
  imports: [CommonModule],
  templateUrl: './ux-case-ganesha-fit.component.html',
  styleUrl: './ux-case-ganesha-fit.component.scss'
})
export class UxCaseGaneshaFitComponent {
  personas: Persona[] = [
    {
      id: 1,
      name: 'Alex',
      age: 28,
      profession: 'Software Engineer',
      goals: 'Wants to maintain fitness and join group classes',
      icon: 'bi-person-circle'
    },
    {
      id: 2,
      name: 'Sophie',
      age: 34,
      profession: 'Marketing Manager',
      goals: 'Looking for personal coaching and nutrition advice',
      icon: 'bi-person-circle'
    },
    {
      id: 3,
      name: 'John',
      age: 42,
      profession: 'Freelancer',
      goals: 'Interested in flexible membership and finding nearby clubs',
      icon: 'bi-person-circle'
    }
  ];

  // Images / wireframes
  wireframes = [
    { id:1, title: 'Menu', img: 'assets/img/ux/ganesha-fit/wireframe-menu.png' },
    { id:2, title: 'Club', img: 'assets/img/ux//ganesha-fit/wireframe-club.png' },
    { id:3, title: 'Contact', img: 'assets/img/ux//ganesha-fit/wireframe-contact.png' },
    { id:4, title: 'Coaching', img: 'assets/img/ux//ganesha-fit/wireframe-coaching.png', desktop: true },
    { id:5, title: 'Machines', img: 'assets/img/ux//ganesha-fit/wireframe-machines.png', desktop: true }
  ];

  highFidelity = [
    { id:1, title: 'Menu', img: 'assets/ganesha-fit/high-menu.png' },
    { id:2, title: 'Club', img: 'assets/ganesha-fit/high-club.png' },
    { id:3,  title: 'Contact', img: 'assets/ganesha-fit/high-contact.png' },
    { id:4, title: 'Coaching', img: 'assets/ganesha-fit/high-coaching.png', desktop: true },
    { id:5, title: 'Machines', img: 'assets/ganesha-fit/high-machines.png', desktop: true }
  ];

  tasks = [
      {id:1, title:'Explore machines', description:'List of machines, descriptions, usage tips'},
      {id:2, title:'Browse classes', description:'Schedule, class info, sign up / cancel'},
      {id:3, title:'Manage subscription', description:'View plan, upgrade/downgrade, payment info'},
      {id:4, title:'Book a coach', description:'List available coaches, book session, calendar integration'},
      {id:5, title:'Find a club', description:'Search clubs by location, map, details'},
      {id:6, title:'Contact', description:'Contact form, email, phone, chat option'}
    ]
}
