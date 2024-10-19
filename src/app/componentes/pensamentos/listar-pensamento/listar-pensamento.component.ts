import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterModule, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  title = 'listar pensamento';

  listaPensamentos = [
    {
      conteudo: 'Je vois la vie en rose!',
      autoria: 'Edith Piaf',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Tout peut s arranger, quelques rayons du ciel d été.',
      autoria: 'Edith Piaf',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Don t stop me, don t stop me, don t stop me. Hey, hey, hey. Don t stop me, don t stop me, ooh, ooh, ooh. I like it. Don t stop me, don t stop me. Have a good time, good time. Don t stop me, don t stop me.',
      autoria: 'Freddie Mercury',
      modelo: 'modelo2'
    },
    {
      conteudo: 'É pau, é pedra, é o fim do caminho. É um resto de toco, é um pouco sozinho. É um caco de vidro, é a vida, é o Sol. É a noite, é a morte, é o laço, é o anzol. É peroba do campo, é o nó da madeira. Caingá, candeia, é o Matita Pereira. É madeira de vento, tombo da ribanceira. É o mistério profundo, é o queira ou não queira.',
      autoria: 'Tom Jobim',
      modelo: 'modelo1'
    }
  ]

}
