import { Component, OnInit } from '@angular/core';
import { defCommandInt, defCommands } from 'src/assets/data/default';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }
  commands: defCommandInt[] = []
  ngOnInit(): void {
    this.commands = defCommands;
  }

}
