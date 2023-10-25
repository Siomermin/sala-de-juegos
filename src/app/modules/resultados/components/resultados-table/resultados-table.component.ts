import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados-table',
  templateUrl: './resultados-table.component.html',
  styleUrls: ['./resultados-table.component.scss'],
  providers: [DatePipe],
})
export class ResultadosTableComponent {
  @Input() resultadosData: any[] = [];
  @Input() resultadoColumns: string[] = [];


  constructor() {}

}
