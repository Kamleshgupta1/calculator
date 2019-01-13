import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  
  public num1:number;
  public num2:number;
  public result:number;
  public name:string;
  
  addition(){
	  this.result = this.num1 + this.num2;
	  this.name = "addition";
  }
  
  substraction(){
	  this.result = this.num1 - this.num2;
	  this.name = "substraction";
  }
  
  multiplication(){
	  this.result = this.num1 * this.num2;
	  this.name = "multiplication";
  }
  
  division(){
	  this.result = this.num1 / this.num2;
	  this.name = "division";
  }
  
  
}
