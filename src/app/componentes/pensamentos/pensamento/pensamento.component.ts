import { Component, Input, model } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  title = 'pensamento';

  @Input() pensamento = {
    conteudo: 'Je vois la vie en rose',
    autoria: 'Edith Piaf',
    modelo: 'modelo3'
  }
}
