import { Component } from '@angular/core';
import { Board } from '../../models/board';
import { Cell } from '../../models/cell';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscaminas',
  templateUrl: './buscaminas.component.html',
  styleUrls: ['./buscaminas.component.scss']
})
export class BuscaminasComponent {

  ngOnInit(): void {
  }
  title = 'Buscaminas';
  board: Board;
  constructor() {
    this.reset();
    this.board= new Board(20,50);
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      Swal.fire('Perdiste',"","error");
    } else if (result === 'win') {
      Swal.fire('GANASTE!!!',"","success");
    }
  }
  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset() {
    this.board = new Board(20, 50);
  }
}
