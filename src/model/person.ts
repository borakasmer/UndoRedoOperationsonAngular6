export class Person{
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
    
    private _Surname : string;
    public get Surname() : string {
        return this._Surname;
    }
    public set Surname(v : string) {
        this._Surname = v;
    }
    
    
    private _BirthDate : Date;
    public get BirthDate() : Date {
        return this._BirthDate;
    }
    public set BirthDate(v : Date) {
        this._BirthDate = v;
    }

    
    private _IsMale : boolean;
    public get IsMale() : boolean {
        return this._IsMale;
    }
    public set IsMale(v : boolean) {
        this._IsMale = v;
    }
    
    
    private _Salary : number[];
    public get Salary() : number[] {
        return this._Salary;
    }
    public set Salary(v : number[]) {
        this._Salary = v;
    }
}