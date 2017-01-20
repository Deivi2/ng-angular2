import {Component} from "@angular/core";
@Component({
    selector: 'ns-races',
    template: `<div *ngIf="races.length > 0"><h2>Races</h2></div>
               <ul>
                   <li *ngFor="let race of races; let i=index">{{i+1}} - {{race.name}}</li>
               </ul> 
              `
})
export class RacesComponent {
    races: Array<any> = [{name: 'London'},{name: 'Lyon'}];
}