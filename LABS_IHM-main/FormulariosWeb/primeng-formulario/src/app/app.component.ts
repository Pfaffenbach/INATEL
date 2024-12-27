import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

interface EstadoCivil {
  chave: string;
  valor: string;
}

interface Escolaridade {
  codigo: string;
  descricao: string;
}

export class AppComponent {
  title = 'primeng-formulario';

  // campos do formulário:
  nome = '';
  sobrenome = '';

  //radio button
  estadoCivilSelecionado?: EstadoCivil;
  estadoCivilArray: EstadoCivil[];

  //checkbox
  habilidadeSelecionadas: string[] = [];

  //drop down
  escolaridadeArray: Escolaridade[];
  escolaridadeSelecionada ?: Escolaridade;

  constructor() {
    this.estadoCivilArray = [
      { chave: 'so', valor: 'Solteiro' },
      { chave: 'ca', valor: 'Casado' },
      { chave: 'di', valor: 'Divorciado' },
    ];

    this.escolaridadeArray = [
      {codigo:'emed', descricao:'Ensino Médio'},
      {codigo:'supr', descricao:'Superior'},
      {codigo:'posg', descricao:'Pós-graduação'},
      {codigo:'mest', descricao:'Mestrado'},
      {codigo:'dout', descricao:'Doutorado'}
    ];
  }

  cadastrar() {
    alert('Pessoa Fisica ' + this.nome + ' cadastrada');
  }
  
}
