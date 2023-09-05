/**
 * format number based on internationalization API
 * @param {string} locale - The locale string (e.g., 'en-US', 'fr-FR')
 * @return {object} An object with a `parse` method that takes a string and returns a number
 */

type NumberParser = {
  parse: (input: string) => number;
};

export const createNumberParser = (locale: string): NumberParser => {
  const parts = new Intl.NumberFormat(locale).formatToParts(12345.6)
  const numerals = [
    ...new Intl.NumberFormat(locale, { useGrouping: false }).format(9876543210),
  ].reverse()
  const index = new Map(numerals.map((d, i) => [d, i]))

  const groupSymbol = parts.find((d) => d.type === "group")?.value || ""
  const decimalSymbol = parts.find((d) => d.type === "decimal")?.value || ""
  const _group = new RegExp(
    `[${groupSymbol.replace(/\s/g, "\\s").replace(/\./g, "\\.")}]`,
    "g",
  )
  const _decimal = new RegExp(`[${decimalSymbol.replace(/\./g, "\\.")}]`)
  const _numeral = new RegExp(`[${numerals.join("")}]`, "g")
  const _index = (d: string) => index.get(d)

  return {
    parse: (string: string): number => {
      string = string
        .trim()
        .replace(_group, "")
        .replace(_decimal, ".")
        .replace(_numeral, (d) => _index(d) as unknown as string)

      return string ? +string : NaN
    },
  }
}

export default createNumberParser
