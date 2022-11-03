
// Example -----------------------------

import a from 'b';

const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();
a.foo()

class SpecialGreeter extends Greeter {
    constructor() {
        super("Very special\n greetings");
    }
}

const regex = /^hell\/o/;

// Tests -----------------------------

declare namespace GreetingLib {
    interface LogOptions {
        verbose?: boolean;
    }
    interface AlertOptions {
        modal: boolean;
        title?: string;
        color?: string;
    }
}
