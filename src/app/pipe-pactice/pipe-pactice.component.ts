import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-pactice',
  templateUrl: './pipe-pactice.component.html',
  styleUrls: ['./pipe-pactice.component.css']
})
export class PipePacticeComponent {

  jsonVal = {moo: 'foo' , goo: {too: 'new'}};

  dateVal = new Date();


}
