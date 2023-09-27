import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  skills: Array<any> = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsService.getSkills()
      .subscribe((data: any) => {
        console.log(data);

        // Verificar si la respuesta de la API es una lista
        if (Array.isArray(data)) {
          // Iterar sobre la lista
          data.forEach((ski: any) => {
            const skills2 = {
              skil: ski.skills || "??"
            };

            // Agregar al arreglo
            this.skills.push(skills2);
          });
        }
      });
  }

}
