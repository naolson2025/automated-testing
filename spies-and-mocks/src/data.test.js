import { describe, it, expect, vi } from 'vitest'
import { generateReportData } from './data'

// spy example
describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    const logFn = vi.fn()
    generateReportData(logFn)
    expect(logFn).toHaveBeenCalled()
  })
})