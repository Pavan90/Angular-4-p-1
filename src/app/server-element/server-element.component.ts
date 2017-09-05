import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  SimpleChanges,
  ViewEncapsulation, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated

})
export class ServerElementComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input('srvElement') element: {type:string, name:string, content:string};
  constructor() {
    console.log('constructor called...')
  }

  ngOnChanges(changes: SimpleChanges){
console.log('ngOnChanges called...!!');
    console.log(changes)
  }
  ngOnInit() {
    console.log('ngOnInit called....!!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called....');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called....!!!!!!!1');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called....!!!!!!!1');

  }

  ngAfterViewInit(){
    console.log('ngAfterContentInit called....!!!!!!!1');
  }
  ngAfterViewChecked(){
    console.log('ngAfterContentChecked called....!!!!!!!1');

  }

  ngOnDestroy(){
    console.log('ngOnDestroy.....')
  }

}
