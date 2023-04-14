import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MagicStringComponent {
    content: ElementRef;
    originalContent: string | any;
    controlledContent: string | any;
    ngOnInit(): void;
    markText(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MagicStringComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MagicStringComponent, "md-magic-string", never, {}, {}, never, ["*"], false, never>;
}
