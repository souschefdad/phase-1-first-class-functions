function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    return function someFunction() {
    }
}

function returnsAnAnonymousFunction() {
    return () => "Nice."
}