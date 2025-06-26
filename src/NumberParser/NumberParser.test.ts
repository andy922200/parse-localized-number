import createNumberParser from './index'

describe('createNumberParser', () => {
  test('correctly parse numbers for US locale', () => {
    const parser = createNumberParser('en-US')
    expect(parser.parse('1,234.56')).toBe(1234.56)
    expect(parser.parse('1,234')).toBe(1234)
  })

  test('correctly parse numbers for German locale', () => {
    const parser = createNumberParser('de-DE')
    expect(parser.parse('1.234,56')).toBe(1234.56)
    expect(parser.parse('1.234')).toBe(1234)
  })

  test('correctly parse numbers for French locale', () => {
    const parser = createNumberParser('fr-FR')
    expect(parser.parse('1 234,56')).toBe(1234.56)
    expect(parser.parse('1 234')).toBe(1234)
  })

  test('return NaN for invalid input', () => {
    const parser = createNumberParser('en-US')
    expect(parser.parse('abc')).toBeNaN()
  })
})
