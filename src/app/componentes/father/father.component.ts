import { Component, OnDestroy, OnInit } from '@angular/core';
import { Son1Component } from '../son1/son1.component';
import { ComunicationService } from '../../services/comunication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [CommonModule, Son1Component],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent implements OnInit, OnDestroy {

  soy = 'Father';
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
