import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CreditFriendsService } from '../_services/credit-friends.service';
import { Solicitud } from 'src/app/_clases/Solicitud';

@Directive({
  selector: '[appTimer]'
})
export class TimerDirective implements OnInit {

  @Input() private solicitud: Solicitud;
  @Output() timeUp = new EventEmitter();
  public upSolicitud: Solicitud;

  constructor(private el: ElementRef, private _cfService: CreditFriendsService) { }

  ngOnInit() {

    this.upSolicitud = {
      contra: this.solicitud.contra,
      favor: this.solicitud.favor,
      fecha: this.solicitud.fecha,
      monto: this.solicitud.monto,
      plazo: this.solicitud.plazo,
      status: this.solicitud.status,
      total: this.solicitud.total,
      uid: this.solicitud.uid
    }

    this.startTimer(this.upSolicitud.fecha);
  }

  startTimer(fecha: string) {
    let arrDate:any = fecha.split(" ");
    let arrTime:any = arrDate[1].split(":");

    let currentdate = new Date(); 
    let date = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear(); 
    let time = currentdate.getHours() + ":" + currentdate.getMinutes();
    let currentArrTime = time.split(':');

    if (arrDate[0] != date) {
      if (this.upSolicitud.favor > this.upSolicitud.contra) {
        this.upSolicitud.status = 'A'
      } else {
        this.upSolicitud.status = "R"
      }

      this._cfService.db.list<Solicitud>('solicitudes').update(this.solicitud.key, this.upSolicitud);
      return;
    }

    let calc: number = 5 - (parseInt(currentArrTime[1]) - parseInt(arrTime[1]));
    let duration:number = calc * 60;

    if (calc <= 0) {
      if (this.upSolicitud.favor > this.upSolicitud.contra) {
        this.upSolicitud.status = 'A'
      } else {
        this.upSolicitud.status = "R"
      }

      this._cfService.db.list<Solicitud>('solicitudes').update(this.solicitud.key, this.upSolicitud);
      return;
    }

    let timer = duration, minutes, seconds;

    let interval: any = setInterval(() => {
      minutes = timer / 60;
      minutes = parseInt(minutes);
      seconds = timer % 60;
      seconds = parseInt(seconds);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      if (--timer < 0) {
        this.timeUp.emit(this.solicitud);

        clearInterval(interval);
      } else {
        this.el.nativeElement.innerHTML = minutes + ":" + seconds;
      }
    }, 1000);
  }

}
