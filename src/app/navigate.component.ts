import { Component, OnInit, Input, Output, EventEmitter, KeyValueDiffers } from '@angular/core';
import { Person } from '../model/person';
import { cloneService } from './cloneService';

@Component({
    selector: 'navigate-console',
    templateUrl: 'navigate.component.html'
})

export class NavigateComponent implements OnInit {
    constructor(private differs: KeyValueDiffers, public service: cloneService) {
        this.differ = differs.find({}).create();
    }

    container: Person[] = [];
    currentIndex: number = 0;

    @Input() modelPerson: Person;
    differ: any;

    ngDoCheck() {
        var changes = this.differ.diff(this.modelPerson);

        if (changes) {
            //console.log("Input Data:"+JSON.stringify(this.modelPerson)); 
            this.pushContainer(this.modelPerson);
        }
    }
    @Output() getdata: EventEmitter<Person> = new EventEmitter<Person>();

    ngOnInit() { }

    public undoClick() {
        this.currentIndex++;
        var getIndex = this.container.length - 1 - this.currentIndex;
        if (getIndex >= 0) {
            //this.cloneModel(this.container[getIndex]);
            var data = this.service.cloneModel(this.container[getIndex]);
            this.getdata.emit(data);
        }
    }

    public redoClick() {
        this.currentIndex--;
        var getIndex = this.container.length - 1 - this.currentIndex;
        if (getIndex >= 0) {
            //this.cloneModel(this.container[getIndex]);
            var data = this.service.cloneModel(this.container[getIndex]);
            this.getdata.emit(data);
        }
    }

    public pushContainer(per: Person) {
        //var data = new Person();
        //data = this.service.cloneModel(per);
        //data.BirthDate = per.BirthDate;
        //data.IsMale = per.IsMale;
        //data.Name = per.Name;
        //data.Surname = per.Surname;
        //data.Salary = [per.Salary[0], per.Salary[1]];
        if (this.currentIndex > 0 && this.currentIndex < this.container.length - 1) {
            var getIndex = this.container.length - 1 - this.currentIndex;
            this.container.splice(getIndex, 0, per);
        }
        else {
            this.container.push(per);
        }
        //console.log("Container:" + JSON.stringify(this.container));
    }

    public canUndo(): boolean {
        return (this.container.length < 2 || this.currentIndex >= this.container.length - 1);
    }

    public canRedo(): boolean {
        return this.currentIndex<=0;
    }

    /*public cloneModel(oldData: Person) {
        var data = new Person();
        data.BirthDate = oldData.BirthDate;
        data.IsMale = oldData.IsMale;
        data.Name = oldData.Name;
        data.Surname = oldData.Surname;
        data.Salary = [oldData.Salary[0], oldData.Salary[1]];
        this.getdata.emit(data);
    }*/
}