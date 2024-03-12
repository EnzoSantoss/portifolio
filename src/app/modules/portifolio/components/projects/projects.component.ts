import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projectsArray = signal([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto lista de tarefas',
      title: 'Lita de Tarefas',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça a lista de tarefa',
          href: 'https://listadetarefa.com',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto vida full cycle',
      title: 'Vida Full Cycle',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça a Vida FullCycle',
          href: 'https://vidaFullCycle.com',
        },
      ],
    },
  ]);
}
