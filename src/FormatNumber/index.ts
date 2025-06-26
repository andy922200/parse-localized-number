import { createNumberParser } from '@/NumberParser'

/**
 * format number with comma based on different browser region settings
 * @param {number} num
 * @return {string}
 */
export const formatNumber = (num: unknown, defaultLang?: string): string => {
  if (typeof num !== 'number' && typeof num !== 'string') return 'The result is not a number'

  // 檢查是否在瀏覽器環境中
  const browserLang =
    defaultLang || (typeof window !== 'undefined' ? window.navigator.language : 'en-US')
  let value: number | string | undefined = undefined

  if (typeof num === 'string') {
    value = createNumberParser(browserLang).parse(num)
  }

  if (typeof num === 'number') {
    value = Number(num)
  }

  return Number.isNaN(value) ? 'The result is not a number' : value!.toLocaleString(browserLang)
}

export default formatNumber
