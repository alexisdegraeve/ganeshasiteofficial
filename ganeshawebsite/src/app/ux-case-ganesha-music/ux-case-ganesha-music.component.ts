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
  selector: 'app-ux-case-ganesha-music',
  imports: [CommonModule],
  templateUrl: './ux-case-ganesha-music.component.html',
  styleUrl: './ux-case-ganesha-music.component.scss'
})
export class UxCaseGaneshaMusicComponent {
  personas: Persona[] = [
    {
      id: 1,
      name: 'Liam',
      age: 26,
      profession: 'Graphic Designer',
      goals: 'Discover new artists and listen to live radio while working',
      icon: 'bi-headphones'
    },
    {
      id: 2,
      name: 'Emma',
      age: 32,
      profession: 'Marketing Specialist',
      goals: 'Watch music videos and manage premium subscriptions',
      icon: 'bi-music-note-beamed'
    },
    {
      id: 3,
      name: 'Marc',
      age: 45,
      profession: 'Freelance Consultant',
      goals: 'Use accessible audio features and easily identify membership plans',
      icon: 'bi-broadcast'
    }
  ];
  // Images / wireframes
wireframes = [
  {
    id: 1,
    title: 'Menu (Mobile)',
    img: 'assets/img/ux/ganesha-music/wireframe-menu.png'
  },
  {
    id: 2,
    title: 'Artists (Mobile)',
    img: 'assets/img/ux/ganesha-music/wireframe-artists.png'
  },
  {
    id: 3,
    title: 'Live (Mobile)',
    img: 'assets/img/ux/ganesha-music/wireframe-live.png'
  },
  {
    id: 4,
    title: 'Videos (Desktop)',
    img: 'assets/img/ux/ganesha-music/wireframe-videos.png',
    desktop: true
  },
  {
    id: 5,
    title: 'Memberships (Desktop)',
    img: 'assets/img/ux/ganesha-music/wireframe-memberships.png',
    desktop: true
  }
];

highFidelity = [
  {
    id: 1,
    title: 'Menu (Mobile)',
    img: 'assets/img/ux/ganesha-music/high-menu.png'
  },
  {
    id: 2,
    title: 'Artists (Mobile)',
    img: 'assets/img/ux/ganesha-music/high-artists.png'
  },
  {
    id: 3,
    title: 'Live (Mobile)',
    img: 'assets/img/ux/ganesha-music/high-live.png'
  },
  {
    id: 4,
    title: 'Videos (Desktop)',
    img: 'assets/img/ux/ganesha-music/high-videos.png',
    desktop: true
  },
  {
    id: 5,
    title: 'Memberships (Desktop)',
    img: 'assets/img/ux/ganesha-music/high-memberships.png',
    desktop: true
  }
];
tasks = [
  {
    id: 1,
    title: 'Browse artists',
    description: 'Search artists and filter them alphabetically'
  },
  {
    id: 2,
    title: 'Listen to live radio',
    description: 'Play, pause, and switch between live radio stations'
  },
  {
    id: 3,
    title: 'Manage favorites',
    description: 'Save and quickly access up to five favorite stations'
  },
  {
    id: 4,
    title: 'Watch videos',
    description: 'Search and watch music videos on desktop'
  },
  {
    id: 5,
    title: 'Choose membership',
    description: 'Compare plans and select a subscription based on budget'
  },
  {
    id: 6,
    title: 'Accessibility',
    description: 'Visually distinguish plans using size and icons, not color only'
  }
];

}
