import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CriarPensamentoComponent } from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import { ListarPensamentoComponent } from "./componentes/pensamentos/listar-pensamento/listar-pensamento.component";
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentoComponent, ListarPensamentoComponent, PensamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'memoteca';
}
