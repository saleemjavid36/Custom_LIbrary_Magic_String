import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class MagicStringComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnaWMtc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hZ2ljLXN0cmluZy9zcmMvbGliL21hZ2ljLXN0cmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBcUJuRixNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFFBQVE7UUFDTixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixHQUFDLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO1FBQ3BGLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxxQkFBcUI7SUFFckIsc0RBQXNEO0lBQ3RELElBQUk7SUFHSixRQUFRLENBQUMsS0FBUztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQ25ELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQzNCLHNCQUFzQixLQUFLLENBQUMsS0FBSyxTQUFTLENBQzNDLENBQUM7SUFDSixDQUFDOztpSEF4QlUsb0JBQW9CO3FHQUFwQixvQkFBb0IsMkpBakJyQjs7Ozs7Ozs7R0FRVDsyRkFTVSxvQkFBb0I7a0JBbkJoQyxTQUFTOytCQUNFLGlCQUFpQixZQUNqQjs7Ozs7Ozs7R0FRVCxpQkFPYSxpQkFBaUIsQ0FBQyxJQUFJOzhCQUdkLE9BQU87c0JBQTVCLFNBQVM7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkICxWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kLW1hZ2ljLXN0cmluZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIChrZXlkb3duLmVudGVyKT1cIm1hcmtUZXh0KCRldmVudC50YXJnZXQpXCI+XG4gIFxuICA8ZGl2ICNjb250ZW50IFtoaWRkZW5dPVwidHJ1ZVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgIFxuICA8ZGl2IFtpbm5lckhUTUxdPVwiY29udHJvbGxlZENvbnRlbnRcIj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAubWFya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnllbGxvd1xuICB9XG4gIGBcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjpWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2ljU3RyaW5nQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQhOkVsZW1lbnRSZWYgXG5cbiAgb3JpZ2luYWxDb250ZW50OnN0cmluZyB8IGFueTsgXG4gIGNvbnRyb2xsZWRDb250ZW50OnN0cmluZyB8IGFueVxuXG4gIG5nT25Jbml0KCl7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyb2xsZWRDb250ZW50PXRoaXMub3JpZ2luYWxDb250ZW50PXRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50XG4gICAgfSwgMTApO1xuICB9XG5cbiAgLy8gbmdBZnRlclZpZXdJbml0KCl7XG4gIFxuICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudClcbiAgLy8gfVxuXG5cbiAgbWFya1RleHQodmFsdWU6YW55KXtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSlcbiAgICB0aGlzLmNvbnRyb2xsZWRDb250ZW50ID0gdGhpcy5vcmlnaW5hbENvbnRlbnQucmVwbGFjZShcbiAgICAgIG5ldyBSZWdFeHAodmFsdWUudmFsdWUsJ2cnKSxcbiAgICAgIGA8c3BhbiBjbGFzcz1cIm1hcmtcIj4ke3ZhbHVlLnZhbHVlfTwvc3Bhbj5gXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=