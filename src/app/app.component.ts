import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { cloneService } from './cloneService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model: Person;
  tr: any;
  isModelChange: boolean = false;
  changedModel: Person;

  constructor(public service: cloneService) { }
  public ngOnInit() {
    this.model = new Person();
    this.model.Name = "Bora";
    this.model.Surname = "Kasmer";
    this.model.BirthDate = new Date(1978, 6, 3);
    this.model.IsMale = true;
    this.model.Salary = [5000, 7000];
    //this.changedModel = this.cloneModel(this.model);
    this.changedModel = this.service.cloneModel(this.model);
    //this.container.push(this.model);

    //-------------------------
    this.tr = {
      firstDayOfWeek: 0,
      dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
      dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
      dayNamesMin: ["Pz", "Pt", "Sl", "Çr", "Pr", "Cm", "Ct"],
      monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Augstos", "Eylül", "Ekim", "Kasım", "Aralık"],
      monthNamesShort: ["Ock", "Şbt", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Ekm", "Ksm", "Arl"],
      today: 'Bugün',
      clear: 'Temizle'
    };
  }

  public checkModel(isCheck: boolean = false) {
    if (this.isModelChange || isCheck) {
      ////this.changedModel = this.cloneModel(this.model);
      this.changedModel = this.service.cloneModel(this.model);
      //console.log(JSON.stringify(this.model));
      //this.container.push(this.model);      
      this.isModelChange = false;
    }
  }

  public getCurrentData(event) {
    this.model = event;
  }

  /*public cloneModel(oldData: Person): Person {
    var data = new Person();
    data.BirthDate = oldData.BirthDate;
    data.IsMale = oldData.IsMale;
    data.Name = oldData.Name;
    data.Surname = oldData.Surname;
    data.Salary = [oldData.Salary[0], oldData.Salary[1]];
    return data;
  }*/
}

