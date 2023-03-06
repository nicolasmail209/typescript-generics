//https://www.youtube.com/watch?v=oF7m5ibwzAw
//Tested in typescript playground

//Class decorators
//Went to review prototype https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
/* 

function Component(target: Function) { //Because in js a class is a function
    target.prototype.id = 100; //target.id would give an error.
}

@Component
export class TestClass {
    static elementId: string;

    id: number;

    printId(prefix: string = ''): string {
        return prefix + this.id;
    }
}

console.log(new TestClass().id); //100 */


function Component(options: {id: string}) {
    return (target: Function & typeof TestClass) => {
        target.elementId = options.id;
    }
}

@Component({            //If we dont apply this decorator, line 45 prints undefined
    id: 'Hello World'
})
export class TestClass {
    static elementId: string;

    id: number;

    printId(prefix: string = ''): string {
        return prefix + this.id;
    }
}

console.log(TestClass.elementId);// Hello World

//03:05