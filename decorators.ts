//https://www.youtube.com/watch?v=bRAcWk9S-6g

//You can put them on classes, methods, accessors, properties or parameters.
//Cant make it work in vscode, because of the settings for decorators in the tsconfig
//but works in typescript playground.


/* function g() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = () => {
            console.log('overwritten')
        }
    }
}

class C {
    @g()
    method() {
        console.log('method called')
    }
}

new C().method(); */

/* function g() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
   //     descriptor.value = () => {
   //         console.log('overwritten')
   //     }
    }
}

class C {
    @g()
    method(name: string) {
        console.log('method called', name)
    }
}

new C().method("bob"); */


/* function g() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
   //     descriptor.value = () => {
   //         console.log('overwritten')
   //     }
   const fn = descriptor.value;
   descriptor.value = () => fn('jim')
    }
}

class C {
    @g()
    method(name: string) {
        console.log('method called', name)
    }
}

new C().method("bob"); */


/* function g(name: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
   //     descriptor.value = () => {
   //         console.log('overwritten')
   //     }
   const fn = descriptor.value;
   descriptor.value = () => fn(name)
    }
}

class C {
    @g('andy')
    method(name: string) {
        console.log('method called', name)
    }
}

new C().method("bob"); */


//Lost from here (09:30). Change to another tutorial.
//Also console.time() not working in ts playground.
function time(name: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
   //     descriptor.value = () => {
   //         console.log('overwritten')
   //     }
   const fn = descriptor.value;
   descriptor.value = (...args) => {
    console.time(name);
    const v = fn(...args);
    console.timeEnd(name);
    return v
    }
    }
}

class C {
    @time('moe')
    method(name: string) {
        console.log('method called', name)
    }
}

new C().method("bob");