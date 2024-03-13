import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.inteface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public experiencesArray = signal<IExperience[]>([
    {
      summary: {
        strong: 'Desenvolvedor de Software Júnior',
        p: 'Tropa Digital | 2023 - Atualmente',
      },
      text: `Responsável por criar sistemas escaláveis e
      seguros utilizando Node.js, com ênfase no
      framework Nest.js e MySQL. Especializado em
      construir APIs robustas e eficientes, focadas na
      entrega de alto desempenho e confiabilidade.`,
    },
    {
      summary: {
        strong: 'Desenvolvedor de Software Estagiário',
        p: 'AnyGrid Solar Service | 2022 - 2023',
      },
      text: `Encarregado do desenvolvimento e manutenção
      de softwares internos vitais, primordialmente
      utilizando Node.js e TypeScript.`,
    },
  ]);
}
