import { Component, inject, signal } from '@angular/core';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public projectsArray = signal([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto lista de tarefas',
      title: 'Lita de Tarefas',
      width: '100px',
      height: '51px',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic totam nemo exercitationem ad officia molestiae nihil ab fugiat in fugit alias unde, soluta id est maiores quia necessitatibus suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic totam nemo exercitationem ad officia molestiae nihil ab fugiat in fugit alias unde, soluta id est maiores quia necessitatibus suscipit?',
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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic totam nemo exercitationem ad officia molestiae nihil ab fugiat in fugit alias unde, soluta id est maiores quia necessitatibus suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic totam nemo exercitationem ad officia molestiae nihil ab fugiat in fugit alias unde, soluta id est maiores quia necessitatibus suscipit?',
      links: [
        {
          name: 'Conheça a Vida FullCycle',
          href: 'https://vidaFullCycle.com',
        },
      ],
    },
  ]);

  public openDialog(data: any) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
