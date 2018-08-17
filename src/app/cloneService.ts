import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import * as _ from "lodash";

@Injectable()
export class cloneService {

    constructor() { }
    
    //https://hassantariqblog.wordpress.com/2016/10/13/angular2-deep-copy-or-angular-copy-replacement-in-angular2/
    public cloneModel<T>(oldData: T): T {
        return _.cloneDeep(oldData);
        /*var data = new Person();
        data.BirthDate = oldData.BirthDate;
        data.IsMale = oldData.IsMale;
        data.Name = oldData.Name;
        data.Surname = oldData.Surname;
        data.Salary = [oldData.Salary[0], oldData.Salary[1]];
        return data;*/
      }
}