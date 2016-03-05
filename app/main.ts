import {bootstrap}  from 'angular2/platform/browser';
import {Component} from 'angular2/core';

import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";


@Component({
    selector: 'my-app',
    template: `

    <md-content>

      <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
        <button md-raised-button class="md-raised">Button</button>
        <button md-raised-button class="md-raised md-primary">Primary</button>
        <div class="label">Raised</div>
      </section>

    </md-content>

    `
})

class InventoryApp{
    constructor(){

    }
}

bootstrap(InventoryApp);