import {Component} from '@angular/core'

@Component({
    selector: 'helloworld',
    template: `
    <div>
      <h2>Hello world: this is an {{name}} application.</h2>
    </div>
  `
})
export class helloworld {
    @this.Input('name') private name: string;

    constructor() {
        this.name = 'Angular2'
    }
}
