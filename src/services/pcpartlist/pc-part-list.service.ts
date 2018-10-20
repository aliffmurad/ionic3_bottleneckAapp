import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.module";

@Injectable()
export class pcpartlist{

    private pcpartListRef = this.db.list<Item>('pcpart-list');


constructor(private db: AngularFireDatabase){}

getPcPartList(){
    return this.pcpartListRef;
}

addPcPartList(item: Item){
    return this.pcpartListRef.push(item);
}

editItem(item: Item){
    return this.pcpartListRef.update(item.key, item);

}

removeItem(item: Item){
    return this.pcpartListRef.remove(item.key);

}



}