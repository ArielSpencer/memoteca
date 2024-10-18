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
    // {
    //   conteudo: 'Je vois la vie en rose!',
    //   autoria: 'Edith Piaf',
    //   modelo: 'modelo3'
    // },
    // {
    //   conteudo: 'Tout peut s arranger, quelques rayons du ciel d été.',
    //   autoria: 'Edith Piaf',
    //   modelo: 'modelo2'
    // }
  ]

}
