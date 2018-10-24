const fizzBuzz = (n) => {
    for (let i = 0; i <= n; i++) {
        let output = ''
        if (i % 3 === 0) {
            output += 'Fizz'
        } 
        if (i % 5 === 0) {
            output += 'Buzz'
        } 
        console.log(output || i)
    }
}

describe('fizzBuzz()', () => {
    test('test fizzBuzz() result', () => {
        expect(fizzBuzz(15)).toMatch(/FizzBuzz/)
    })
  })