import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'shopping';

  constructor(
    private router: Router
  ) {
    router.events.subscribe(
      (res: any) => {
        if(res instanceof NavigationEnd) {
          if(res.urlAfterRedirects === '/home') {
            this.setTheme("home-body-style");
          } else {
            this.setTheme("lazy-load-body-style");
          }
        }
      }
    );
  }

  setTheme(e: string) {
    document.body.className = e;
  }

}
