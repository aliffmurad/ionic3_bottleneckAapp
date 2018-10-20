
import { Injectable } from '@angular/core';

@Injectable()
export class ListProcessorProvider {

  lists: any = [
    {item: "i3-6100"},
    {item: "i5-6400"},
    {item: "i7-6700"}
  ];

  constructor() {
    console.log('Hello ListProcessorProvider Provider');
  }

}
