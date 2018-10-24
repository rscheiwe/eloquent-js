function stepTriangle(n) {

    let triangle = ''

    if (isNaN(n)) {
        return 'Please enter an integer'
    }

    for (let step = '#'; step.length <= n; step += '#') {

        if (step.length === 1) {
            triangle = step + '\n'
        } else if (step.length <=(n-1)) {
            triangle += step + '\n'
        } else {
            triangle += step
        }
    }
    return triangle
}
  
  describe('stepTriangle()', () => {
    test('test 5-level triangle', () => {
        expect(stepTriangle(5)).toMatch(/#\n##\n###\n####\n#####/)
    })
    test('test 6-level triangle', () => {
        expect(stepTriangle(6)).toMatch(/#\n##\n###\n####\n#####\n######/)
    })
    test('test non-integer', () => {
        expect(stepTriangle('k')).toMatch(/Please enter an integer/)
    })
  })