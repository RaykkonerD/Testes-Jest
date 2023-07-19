/**
 * 
 * "Write a program that prints the numbers from 1 to 100. But for multiples of
 * three print 'Fizz' instead of the number and for the multiples of five print
 * 'Buzz'. For numbers which are multiples of both three and five print
 * 'FizzBuzz'".
 * 
 * Referência:
 * http://blog.codeleak.pl/2014/11/unit-testing-exercise-with-fizzbuzz-and.html
 * 
 * @author jaindsonvs
 *
 */
 class FizzBuzz {

    calculate(número) {

        if (this._éDivisívelPor(número, 3) && this._éDivisívelPor(número, 5)) {
            return 'FizzBuzz';
        }

        if (this._éDivisívelPor(número, 3)) {
            return 'Fizz';
        }

        if (this._éDivisívelPor(número, 5)) {
            return 'Buzz';
        }

        return '' + número;
    }

    _éDivisívelPor(dividendo, divisor) {
        return dividendo % divisor == 0;
    }

}

module.exports = FizzBuzz;