import { Component, OnInit, HostListener } from '@angular/core';
import { InformationServiceService, Person } from '../services/information-service.service';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {

  peopleList: Person[]=[];
  people: Person;
  peopleListObject: Object={};

  nombre:string ='';
  apellido: string ='';
  edad:number =0;

  constructor(private infoService:InformationServiceService) {
    this.infoService.getInformationPeople().subscribe((peopleResp)=>{
      this.peopleListObject = peopleResp;
      this.peopleList = Object.keys(this.peopleListObject).map(key=> this.peopleListObject[key]);      
      console.log(this.peopleList);
    },
    (peopleErr)=>{
      console.log(`Mensaje Error ${peopleErr}`);
    });
   }

  ngOnInit() {
  }

  setPeople(){
    let numero= Math.round(Math.random() * (this.peopleList.length - 1) + 1);

    this.nombre = this.peopleList[numero].nombre;
    this.apellido = this.peopleList[numero].apellido;
    this.edad = this.peopleList[numero].edad;
  }

  @HostListener('document:keyup',['$event'])
  generateEvent(event:KeyboardEvent){
    if(event.code=='Space'){
      this.setPeople();
    }
    console.log(event.code);
  }
}
