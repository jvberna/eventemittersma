import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-son2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './son2.component.html',
  styleUrl: './son2.component.css'
})
export class Son2Component implements OnInit, OnDestroy {

  soy = 'Son2';
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
