/* eslint-env jest */

const div = require('./div')

describe('div', () => {
  it('works', () => {
    expect(div(18n, 10n)).toBe(1n)
    expect(div(15n, 10n)).toBe(1n)
    expect(div(12n, 10n)).toBe(1n)
    expect(div(10n, 10n)).toBe(1n)
    expect(div(8n, 10n)).toBe(0n)
    expect(div(5n, 10n)).toBe(0n)
    expect(div(2n, 10n)).toBe(0n)
    expect(div(0n, 10n)).toBe(0n)
    expect(div(-2n, 10n)).toBe(-1n)
    expect(div(-5n, 10n)).toBe(-1n)
    expect(div(-8n, 10n)).toBe(-1n)
    expect(div(-10n, 10n)).toBe(-1n)
    expect(div(-12n, 10n)).toBe(-2n)
    expect(div(-15n, 10n)).toBe(-2n)
    expect(div(-18n, 10n)).toBe(-2n)
  })

  it('works on negatives', () => {
    expect(div(-18n, -10n)).toBe(1n)
    expect(div(-15n, -10n)).toBe(1n)
    expect(div(-12n, -10n)).toBe(1n)
    expect(div(-10n, -10n)).toBe(1n)
    expect(div(-8n, -10n)).toBe(0n)
    expect(div(-5n, -10n)).toBe(0n)
    expect(div(-2n, -10n)).toBe(0n)
    expect(div(0n, -10n)).toBe(0n)
    expect(div(2n, -10n)).toBe(-1n)
    expect(div(5n, -10n)).toBe(-1n)
    expect(div(8n, -10n)).toBe(-1n)
    expect(div(10n, -10n)).toBe(-1n)
    expect(div(12n, -10n)).toBe(-2n)
    expect(div(15n, -10n)).toBe(-2n)
    expect(div(18n, -10n)).toBe(-2n)
  })
})
