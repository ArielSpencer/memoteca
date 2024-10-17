import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent {
title = 'criar pensamento';

pensamento = {
  id:'1',
  conteudo: 'Aprendendo Angular',
  autoria: 'Dev',
  modelo: ''
}
}
