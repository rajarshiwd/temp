import { Injectable } from '@angular/core';

@Injectable()
export class ElementsRegistry {

  elements;
  constructor(){}


  add(elements){
    console.log("here in ", elements);
    this.elements = elements;
  }
}
