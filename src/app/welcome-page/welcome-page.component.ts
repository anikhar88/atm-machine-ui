import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  plainCreditCard:string = '5555555555551234';
  cardNumber: number;
  constructor(private router: Router) { }


  onSubmit(){
      this.router.navigate(['/select-mode']);
    }

    ngOnInit() {
    }

}
