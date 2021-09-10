import { Injectable } from '@angular/core';

@Injectable()
export class TempoService {
  private tempo: any;
  private counter = 0;

  constructor() {}

  start(ms: number) {
    if (!this.tempo) {
      if (ms) {
        this.tempo = setInterval(() => {
          this.counter++;
        }, ms);
      }
    }
  }
  stop() {
    if (this.tempo) {
      clearInterval(this.tempo);
      this.tempo = null;
    }
  }
  reset() {
    if (this.tempo) {
      clearInterval(this.tempo);
      this.tempo = null;
      this.counter = 0;
    } else {
      clearInterval(this.tempo);
      this.tempo = null;
      this.counter = 0;
    }
  }

   getCount() {
    return this.counter;
  }
}