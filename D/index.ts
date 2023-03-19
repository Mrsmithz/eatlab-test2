import { Addition, CalculatorFactory, Division, Multiplication, Subtraction } from "./src/index.class";

const calculator = CalculatorFactory.newCalculator()

const x = 5
const y = 2
calculator.setOperation(new Addition())
console.log(calculator.calculate(x, y))

calculator.setOperation(new Subtraction())
console.log(calculator.calculate(x, y))

calculator.setOperation(new Multiplication())
console.log(calculator.calculate(x, y))

calculator.setOperation(new Division())
console.log(calculator.calculate(x, y))