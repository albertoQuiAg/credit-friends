import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loadingScreen: any;
  public progress: boolean = false;

  constructor(private router: Router) {

  }

  ngAfterViewInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.loadingScreen = document.getElementById('loadingScreen');
      
      this.progress = true;
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.progress = false;

      if (this.loadingScreen) {
        this.loadingScreen.style.opacity = 0;
        setTimeout(() => {
          this.loadingScreen.remove();
        },600)
      }
    });

    this.router.events.pipe(filter(event => event instanceof NavigationCancel)).subscribe(() => {
      this.progress = false;
    });
  }
}
