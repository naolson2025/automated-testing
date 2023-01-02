import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('should transform a string to a number', () => {
  expect(transformToNumber('1')).toBe(1)
})