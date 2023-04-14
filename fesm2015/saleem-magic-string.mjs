import * as i0 from '@angular/core';
import { Injectable, Component, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';

class MagicStringService {
    constructor() { }
}
MagicStringService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MagicStringService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MagicStringComponent {
    ngOnInit() {
        setTimeout(() => {
            this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
        }, 10);
    }
    // ngAfterViewInit(){
    // console.log(this.content.nativeElement.textContent)
    // }
    markText(value) {
        console.log(value.value);
        this.controlledContent = this.originalContent.replace(new RegExp(value.value, 'g'), `<span class="mark">${value.value}</span>`);
    }
}
MagicStringComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MagicStringComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.7", type: MagicStringComponent, selector: "md-magic-string", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: `
  <input type="text" (keydown.enter)="markText($event.target)">
  
  <div #content [hidden]="true">
      <ng-content></ng-content>
  </div>
   
  <div [innerHTML]="controlledContent"></div>
  `, isInline: true, styles: [".mark{background-color:#ff0}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringComponent, decorators: [{
            type: Component,
            args: [{ selector: 'md-magic-string', template: `
  <input type="text" (keydown.enter)="markText($event.target)">
  
  <div #content [hidden]="true">
      <ng-content></ng-content>
  </div>
   
  <div [innerHTML]="controlledContent"></div>
  `, encapsulation: ViewEncapsulation.None, styles: [".mark{background-color:#ff0}\n"] }]
        }], propDecorators: { content: [{
                type: ViewChild,
                args: ['content']
            }] } });

class MagicStringModule {
}
MagicStringModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MagicStringModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.7", ngImport: i0, type: MagicStringModule, declarations: [MagicStringComponent], exports: [MagicStringComponent] });
MagicStringModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: MagicStringModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MagicStringComponent
                    ],
                    imports: [],
                    exports: [
                        MagicStringComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of magic-string
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MagicStringComponent, MagicStringModule, MagicStringService };
//# sourceMappingURL=saleem-magic-string.mjs.map
