import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit{

  interests: Array<any> = [];

  constructor(private interestsService: InterestsService) { }

  ngOnInit(): void {
    this.interestsService.getInterests()
      .subscribe((data: any) => {
        console.log(data);

        // Verificar si la respuesta de la API es una lista
        if (Array.isArray(data)) {
          // Iterar sobre la lista
          data.forEach((interests: any) => {
            const interest= {
              interest: interests.interest || "??"
            };

            // Agregar al arreglo
            this.interests.push(interest);
          });
        }
      });
  }

}
