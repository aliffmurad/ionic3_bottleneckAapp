import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { itemCal } from "../../models/itemCalculate/itemCalculate.model";

@Injectable()
export class partlistservice{

    private partlistref = this.db.list<itemCal>('Calculate-part-list');

    constructor(private db: AngularFireDatabase){}

    getPartList(){
        return this.partlistref;
    }

    addPartList(item){
        return this.partlistref.push(item);

    }
}