import { Operation } from "src/index.interface";

export class Addition implements Operation {
    do(x: number, y: number): number {
        return x + y
    };
}

export class Subtraction implements Operation {
    do(x: number, y: number): number {
        return x - y
    }
}

export class Multiplication implements Operation {
    do(x: number, y: number): number {
        return x * y
    }
}

export class Division implements Operation {
    do(x: number, y: number): number {
        return x / y
    }
}

export class Calculator {

    operation: Operation

    constructor(operation: Operation) {
        this.operation = operation
    }

    setOperation(operation: Operation): void {
        this.operation = operation
    }

    calculate(x: number, y: number): number {
        return this.operation.do(x, y)
    }
}

export class CalculatorFactory extends Calculator {
    static newCalculator(): Calculator {
        return new Calculator(new Addition())
    }
}