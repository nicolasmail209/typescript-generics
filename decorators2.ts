//https://www.youtube.com/watch?v=LkOA07F9ZCs

//A decorator is a function.
//You can decorate classes, but not functions.
//We will use javascript, not typescript. In a playground:
//https://javascriptdecorators.org/
//Typescript decorators dont work exactly as javascript ones.


//When executing the script it outputs "decorator called!" eventhough we
//never instanced/instantiated the class Persona.
//Decorators are executed when a class is evaluated, not when it is instantiated.


/* function logger (value, context) {
    console.log('decorator called!')
  }
  
  
  @logger
  class Persona {
  }

 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /* function logger (value, {name, kind}) {//(value, context)
    console.log('decorator called') //This executes at evaluation
    if (kind === 'method') {
      return function (...args) { //This executes when the method is called
        console.log(`Logging ${name} execution with arguments ${args.join(', ')}`);
        const returnedValue = value.call(this, ...args);
        console.log(`End execution after returning ${returnedValue}`);
        return returnedValued
      }
    }
  }
  
  
  @logger //5. kind = class
  class Persona {
    @logger
    weight = 75 //1. kind = field
    
    //@logger
    getWeight() { //4.kind = method
      return this.weight
    }
    
    @logger
    get peso() { return this.weight } //3. kind = getter
    
    @logger
    set peso(value) { this.weight = value } //2. kind = setter
  }
  
  const p = new Persona();
  p.getWeight();
  console.log(p.peso); */

  ////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
  function logger (value, {name, kind}) {//(value, context)
    console.log('decorator called') //This executes at evaluation
    if (kind === 'method') {
      return function (...args) { //This executes when the method is called
        console.log(`Logging ${name} execution with arguments ${args.join(', ')}`);
        const returnedValue = value.call(this, ...args);
        console.log(`End execution after returning ${returnedValue}`);
        return returnedValued
      }
    }
  }
  
  
  @logger //5. kind = class
  class Persona {
    @logger
    weight = 75 //1. kind = field
    
    @logger
    getWeight() { //4.kind = method
      return this.weight
    }
    
    @logger
    get peso() { return this.weight } //3. kind = getter
    
    @logger
    set peso(value) { this.weight = value } //2. kind = setter
  }
  
  const p = new Persona();
  p.getWeight(); */


  /////////////////////////////////////////////////////////////////////////////////////




  
  //The next example didnt work in the video neither.
  //Lost here.

  /* function logger (value, {name, kind}) {//(value, context)
    console.log('decorator called') //This executes at evaluation
    if (kind === 'method') {
      return function (...args) { //This executes when the method is called
        console.time(name);
        const returnedValue = value.call(this, ...args);
        console.timeEnd(name);
        return returnedValued
      }
    }
  }
  
  
  @logger //5. kind = class
  class Persona {
    @logger
    weight = 75 //1. kind = field
    
    @logger
    getWeight() { //4.kind = method
      return this.weight
    }
    
    @logger
    get peso() { return this.weight } //3. kind = getter
    
    @logger
    set peso(value) { this.weight = value } //2. kind = setter
  }
  
  const p = new Persona();
  p.getWeight(); */