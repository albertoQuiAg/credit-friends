import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, debounceTime } from 'rxjs/operators';
import { CreditFriendsService } from 'src/app/_services/credit-friends.service';
import { Solicitud } from 'src/app/_clases/Solicitud';


@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.css']
})
export class NuevaSolicitudComponent implements OnInit, OnDestroy {

  public solicitudForm: FormGroup;
  private subs: Subscription[] = [];
  public submitButton: boolean = false;

  constructor(public form: FormBuilder, private dialogRef: MatDialogRef<NuevaSolicitudComponent>, private snackBar: MatSnackBar,
              private _cfService: CreditFriendsService) {

    this.solicitudForm = this.form.group({
      "monto" : ["", [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
      "plazo" : ["1", Validators.required],
      "total" : new FormControl({value: 0, disabled: true}),
      "uid" : [""],
      "fecha" : [""],
      "status" : ["V"],
      "favor" : [0],
      "contra" : [0]
    });

   }

  ngOnInit() {
  
    let montoSub: Subscription = this.solicitudForm.controls['monto'].valueChanges.pipe(debounceTime(400), map((value) => {
      return this.calculaTotal(value);
    })).subscribe((res) => {
      this.solicitudForm.controls['total'].patchValue(res);
    });

    this.subs.push(montoSub);

    let plazoSub: Subscription = this.solicitudForm.controls['plazo'].valueChanges.pipe(map((value) => {
      return this.calculaTotal(this.solicitudForm.controls['monto'].value);
    })).subscribe((res) => {
      this.solicitudForm.controls['total'].patchValue(res);
    });

    this.subs.push(plazoSub);


  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onSolicitar() {
    if (this.solicitudForm.valid) {

      this.submitButton = true;

      this.solicitudForm.controls['monto'].patchValue(parseFloat(this.solicitudForm.controls['monto'].value));
      this.solicitudForm.controls['uid'].patchValue(this._cfService.userData.uid);

      let currentdate = new Date(); 
      let datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":"  
                      + currentdate.getMinutes() + ":" + currentdate.getSeconds();

      this.solicitudForm.controls['fecha'].patchValue(datetime);

      this._cfService.nuevaSolicitud(this.solicitudForm.getRawValue()).subscribe(() => {
        this.submitButton = false;

        this.snackBar.open('Solicitud generada con éxito', 'OK', {
          duration: 3600
        });
  
        this.dialogRef.close();
      });
      
    }   
  }

  getErrorMessage(control:string) {
    return this.solicitudForm.controls[control].hasError('required') ? 'Este campo es necesario.' :
      this.solicitudForm.controls[control].hasError('pattern') ? 'Solamente números y mayor a 0.'  : '';
  }

  calculaTotal(monto) {
    let val:number = parseFloat(monto) | 0;

    if (!isNaN(val)) {
      switch(this.solicitudForm.controls['plazo'].value) {
        case '1': {
          return val * 1.05;
        }
        case '2': {
          return val * 1.07;
        }
        case '3': {
          return val * 1.12;
        }
      }
    }
  }
}
