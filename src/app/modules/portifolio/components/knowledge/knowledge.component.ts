import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public knowledgeArray = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Ícone de conhecimento de html',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Ícone de conhecimento de css',
    },
    {
      src: 'assets/icons/knowledge/js.svg',
      alt: 'Ícone de conhecimento de js',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de node',
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: 'Ícone de conhecimento de sql',
    },
  ]);
}
