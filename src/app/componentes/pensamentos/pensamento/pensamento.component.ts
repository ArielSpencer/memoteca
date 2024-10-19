import { NgClass } from '@angular/common';
import { Component, Input, model } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass],
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

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    } else if (this.pensamento.conteudo.length > 170) {
      return 'pensamento-m';
    }
    return 'pensamento-p';
  }
}
