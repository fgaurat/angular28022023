import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  isOn = false

  message="is off"

  clicked(){
    this.isOn = !this.isOn
    this.message = this.isOn?"is on":"is off"
    // this.message = "is on"

  }
}
