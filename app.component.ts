import {Component} from "@angular/core";

@Component({
    selector: 'ponyracer-app',
    template: `<h1>PonyRacer</h1>
               <ns-races (newRaveAvailable)="onNewRace()"></ns-races>
               <ng-ponies></ng-ponies>
`
})
export class PonyRacerAppComponent {

            onNewRace(){
                "There is new race awailable mate"
            }
}