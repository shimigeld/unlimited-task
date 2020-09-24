import { Component } from '@angular/core';


@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent  {
  firstNum: string;
  secondNum: string;
  result: number;
  action: string;
  errorMsg = '';

  buttonClicked(action: string): void{
    this.result = null;
    if (this.isInputNumbersValid()) {
      switch (action) {
        case '+':
          this.result = Number(this.firstNum) + Number(this.secondNum);
          this.action = action;
          break;
        case '-':
          this.result = Number(this.firstNum) - Number(this.secondNum);
          this.action = action;
          break;
        case '*':
          this.result = Number(this.firstNum) * Number(this.secondNum);
          this.action = action;
          break;
        case '/':
          if (!this.isSecondNumberZero()) {
            this.result = Number(this.firstNum) / Number(this.secondNum);
          }
          this.action = action;
          break;
      }
    }
  }

  private isValidNumber(input: string): boolean {
    if (input && !isNaN(+input)) {
      return true;
    }
    return false;
  }

  private isInputNumbersValid(): boolean {
    this.errorMsg = '';
    if (!this.isValidNumber(this.firstNum) && !this.isValidNumber(this.secondNum)) {
      this.errorMsg = 'Input numbers are Invalid';
      return false;
    }

    if (!this.isValidNumber(this.firstNum)) {
      this.errorMsg = 'First Number is Invalid';
      return false;
    }

    if (!this.isValidNumber(this.secondNum)) {
      this.errorMsg = 'Second Number is Invalid';
      return false;
    }
    return true;
  }

  private isSecondNumberZero(): boolean {
    if (this.isValidNumber(this.secondNum) && (Number(this.secondNum) === 0)) {
      this.errorMsg = 'Can\'t divide by 0';
      return true;
    }
  }
}
