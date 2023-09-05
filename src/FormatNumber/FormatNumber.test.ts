import { formatNumber } from "./index"

describe("'FormatNumber' Function Test Suite", () => {
  describe("Browser Language Tests", () => {
    test("When the browser language is 'en-US', a number should be formatted according to 'en-US' locale.", () => {
      const num = 1234567.89
      const result = formatNumber(num)

      expect(result).toEqual("1,234,567.89")
    })

    test("When the browser language is 'de-DE', a number should be formatted according to 'de-DE' locale.", () => {
      const num = 1234567.89
      const result = formatNumber(num, "de-DE")

      expect(result).toEqual("1.234.567,89")
    })
  })

  describe("Functional Test", () => {
    test("When a string of number is passed in, it should be formatted correctly.", () => {
      const numStr = "123.45"
      const result = formatNumber(numStr)

      expect(result).toEqual("123.45")
    })

    test("If an invalid input is used, the function should return \"The result is not a number\".", () => {
      const invalidInputs = [
        "invalid",
        NaN,
        undefined,
        null,
        {},
        [],
        () => {},
        true,
        false,
        0 / 0,
      ]
      const result = invalidInputs
        .map((input) => formatNumber(input))
        .filter((res) => res === "The result is not a number")

      expect(result).toContain("The result is not a number")
      expect(result.length).toEqual(invalidInputs.length)
    })
  })
})
