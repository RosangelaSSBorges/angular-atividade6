import { Component, OnInit, Input } from '@angular/core';
import { TempoService } from '../tempo.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {
  @Input() intervalo: number;

  constructor(public tempo: TempoService) { 
    this.tempo.start(this.intervalo * 1000);
  }

  ngOnInit() {
  }
}