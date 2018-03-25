import { ComponentFactoryResolver, ComponentRef, Input, Inject,
Directive, OnChanges, OnInit, ViewContainerRef } from '@angular/core';

import { ElementsRegistry } from '../../providers/elements-registry.service';

@Directive({
  selector: '[resolveElement]'
})

export class ResolveElementDirective implements OnChanges, OnInit {
  @Input()
  element;

  @Input()
  section;

  cmp: ComponentRef<any>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private elements: ElementsRegistry
  ){}

  ngOnInit() {
    const component = this.resolver.resolveComponentFactory<any>(
      this.elements[this.element.type]);
    this.cmp = this.container.createComponent(component);
    this.cmp.instance.element = this.element;
    this.cmp.instance.section = this.section;
  }

  ngOnChanges() {
    if(this.cmp){
      this.cmp.instance.element = this.element;
      this.cmp.instance.section = this.section;
    }
  }
}
