import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';
import { CommonModule } from '@angular/common';
import { Son2Component } from '../son2/son2.component';

@Component({
  selector: 'app-son1',
  standalone: true,
  imports: [CommonModule, Son2Component],
  templateUrl: './son1.component.html',
  styleUrl: './son1.component.css'
})
export class Son1Component implements OnInit, OnDestroy {

  soy = 'Son1';
  elements = ['Son1', 'Son2', 'Father'];
  storedMessages = [''];

  constructor(private comunicationService: ComunicationService) { }

  ngOnInit() {
    this.comunicationService.comunicationObject.subscribe(
      (data) => {
        const obj = JSON.parse(data);
        console.log(obj.dest);
        if (obj.dest == this.soy) {
          this.storedMessages = this.storedMessages.concat(obj.msg);
        }
      }
    );
  }

  emitir(msg:string, dest:string) {
    this.comunicationService.emitir(msg, dest);
  }

  ngOnDestroy(): void {
    this.comunicationService.comunicationObject.unsubscribe();
  }
}
