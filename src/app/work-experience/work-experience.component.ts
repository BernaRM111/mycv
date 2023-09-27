import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: Array<any> = [];

  constructor(private workexperienceService: WorkExperienceService) { }

  ngOnInit(): void {
    this.workexperienceService.getWork()
      .subscribe((data: any) => {
        console.log(data);

        // Verificar si la respuesta de la API es una lista de experiencias laborales
        if (Array.isArray(data)) {
          // Iterar sobre la lista de experiencias laborales
          data.forEach((experiencia: any) => {
            const experienciaLaboral = {
              puesto: experiencia.puesto || "??",
              empresa: experiencia.empresa || "??",
              fecha_ini: experiencia.fecha_ini || "??",
              fecha_fin: experiencia.fecha_fin || "??",
              ciudad: experiencia.ciudad || "??",
              pais: experiencia.pais || "??",
              logros: []
            };

            // Si la API proporciona un arreglo de logros, asignarlo
            if (Array.isArray(experiencia.logros)) {
              experienciaLaboral.logros = experiencia.logros;
            }

            // Agregar la experiencia laboral al arreglo workExperience
            this.workExperience.push(experienciaLaboral);
          });
        }
      });
  }
}


