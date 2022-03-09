import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-challange';
  username = "tes"

  isLogin = false

  login(){
    if (this.isLogin){
      this.isLogin = false
    }
    else {
      this.isLogin = true
    }
  }
}
