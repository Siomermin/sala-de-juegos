import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent {
  resultadosData: any[] = [];
  resultadoColumns: any[] = [];

  constructor(private firestoreService: FirestoreService) {}

  getResultados(game: string) {
    this.firestoreService.get(game).subscribe((data: any) => {
      this.resultadosData = data;
      console.log(data);
      if (this.resultadosData.length > 0) {
        // Set column names based on the first data item (assuming all items have the same structure)
        this.resultadoColumns = Object.keys(this.resultadosData[0]);
      }
    });
  }
}
