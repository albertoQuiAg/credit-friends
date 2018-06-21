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

    let date:any = fecha.split(" ");
    
    let fechaSolicitud:any = date[0].split('/');
    fechaSolicitud = fechaSolicitud[2] + "/" + fechaSolicitud[1] + "/" + fechaSolicitud[0];

    let horaSolicitud = date[1];

    let diferenciaTiempo: number = new Date().getTime() - new Date(fechaSolicitud + " " + horaSolicitud).getTime();
    let mili5Minutes:number = 300000;
    let countDown:number = (mili5Minutes - diferenciaTiempo) / 1000;

    if (countDown <= 0) {
      if (this.upSolicitud.favor > this.upSolicitud.contra) {
        this.upSolicitud.status = 'A'
      } else {
        this.upSolicitud.status = "R"
      }

      this._cfService.db.list<Solicitud>('solicitudes').update(this.solicitud.key, this.upSolicitud);
      return;
    }

    let timer = countDown, minutes, seconds;

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
