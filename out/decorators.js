//https://www.youtube.com/watch?v=bRAcWk9S-6g
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//You can put them on classes, methods, accessors, properties or parameters.
function g() {
    return function (target, propertyKey, descriptor) {
    };
}
class C {
    method() {
        console.log('method called');
    }
}
__decorate([
    g()
], C.prototype, "method", null);
new C().method();
