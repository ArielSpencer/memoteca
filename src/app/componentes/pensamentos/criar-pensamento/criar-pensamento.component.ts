import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})

export class CriarPensamentoComponent {
title = 'criar pensamento';

pensamento: Pensamento = {
  id: 1,
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
