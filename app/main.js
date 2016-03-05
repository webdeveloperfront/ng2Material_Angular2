System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var InventoryApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InventoryApp = (function () {
                function InventoryApp() {
                }
                InventoryApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n    <md-content>\n\n      <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n        <button md-raised-button class=\"md-raised\">Button</button>\n        <button md-raised-button class=\"md-raised md-primary\">Primary</button>\n        <div class=\"label\">Raised</div>\n      </section>\n\n    </md-content>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], InventoryApp);
                return InventoryApp;
            }());
            browser_1.bootstrap(InventoryApp);
        }
    }
});
//# sourceMappingURL=main.js.map