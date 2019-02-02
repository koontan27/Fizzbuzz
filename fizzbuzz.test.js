
const fizzbuzz = require('./fizzbuzz')

test('check', () => {
    for (i = 1; i <= 100; i++) {
        if(i % 3 != 0 && i % 5 != 0){
            expect(fizzbuzz(i)).toBe(i)
        }else if(i % 3 == 0 && i % 5 != 0){
            expect(fizzbuzz(i)).toBe("Fizz")
        }else if(i % 3 != 0 && i % 5 == 0){
            expect(fizzbuzz(i)).toBe("Buzz")
        }else if(i % 3 == 0 && i % 5 == 0){
            expect(fizzbuzz(i)).toBe("FizzBuzz")
        }
    }
})