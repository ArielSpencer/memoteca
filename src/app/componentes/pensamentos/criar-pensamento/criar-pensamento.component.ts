import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
  imports: [CommonModule, FormsModule]
})

export class CriarPensamentoComponent {
title = 'criar pensamento';

pensamento = {
  id:'1',
  conteudo: 'Aprendendo Angular',
  autoria: 'Dev',
  modelo: ''
}

criarPensamento() {
  alert('Novo pensamento criado!');
}

cancelar() {
  alert('Operação cancelada!');
}

}
