// it & test are the same thing
// importing from vitest is the same as importing from jest
// importing it or test will help with autocomplete
import { expect, it, test } from 'vitest'
import { add } from './math'

// test the happy path
it('should sum all values in an array', async () => {
  // arrange
  const numbers = [1, 2, 3]
  const expectedResult = 6

  // act
  const result = add(numbers)

  // assert
  expect(result).toBe(expectedResult)
})

// test the sad path
it('should yeild NaN if at least one invalid # is provided', () => {
  // arrange
  const numbers = [1, 2, 'invalid']

  // act
  const result = add(numbers)

  // assert
  expect(result).toBeNaN()
})

it('should add string numbers', () => {
  // arrange
  const numbers = ['1', '2', '3']
  const expectedResult = 6

  // act
  const result = add(numbers)

  // assert
  expect(result).toBe(expectedResult)
})

it('should yeild 0 if an empty array is provided', () => {
  // arrange
  const numbers = []
  const expectedResult = 0

  // act
  const result = add(numbers)

  // assert
  expect(result).toBe(expectedResult)
})

it('should throw an error if no value is passed', () => {
  // arrange
  // no arrange needed here because we are calling add
  // with no arguments

  // act
  // by wrapping the function in an arrow function
  // we can assert that it throws
  const result = () => add()

  // assert
  expect(result).toThrow()
})

// skip this test as it cannot run with typescript
it.skip('should throw an error if provided with multiple arguments', () => {
  // arrange
  const num1 = 1
  const num2 = 2

  // act
  const result = () => add(num1, num2)

  // assert
  // use a regular expression to match the error message
  expect(result).toThrow(/is not iterable/)
})