import { Component , OnInit} from '@angular/core';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit{
  
  certificates: Array<any> = [];

  constructor(private certificatesService: CertificatesService) { }

  ngOnInit(): void {
    this.certificatesService.getCertificates()
      .subscribe((data: any) => {
        console.log(data);

        // Verificar si la respuesta de la API es una lista de experiencias laborales
        if (Array.isArray(data)) {
          // Iterar sobre la lista de experiencias laborales
          data.forEach((certi: any) => {
            const certificado = {
              nombre: certi.nombre || "??",
              anio: certi.anio || "??",
              descripcion: certi.descripcion || "??"
            };

            // Agregar la experiencia laboral al arreglo workExperience
            this.certificates.push(certificado);
          });
        }
      });
  }
}
