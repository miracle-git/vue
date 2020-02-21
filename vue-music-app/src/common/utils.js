import chinese2pinyin from 'chinese2pinyin'

export function encodeParams(params = {}) {
  let result = ''

  for (const prop in params) {
    const value = params[prop] !== undefined ? params[prop] : ''
    result += `&${prop}=${encodeURIComponent(value)}`
  }

  return result ? result.substring(1) : ''
}

export function normalizeUrl(url, params) {
  const separator = url.indexOf('?') < 0 ? '?' : '&'
  return `${url}${separator}${encodeParams(params)}`
}

export class _$ {
  static _is(type, primitive = false) {
    return function(obj) {
      const dataType = typeof obj
      return primitive ? dataType === `${type.toLowerCase()}` : {}.toString.call(obj) === `[object ${type}]`
    }
  }

  static isInstance(item, type) {
    return item instanceof type
  }

  static isObject(item) {
    return _$._is('Object')
  }

  static isArray(item) {
    return Array.isArray(item) || _$._is('Array')(item)
  }

  static isFunction = (item) => {
    return _$._is('Function')(item)
  }

  static isString(item) {
    return _$._is('String', true)(item)
  }

  static isNumber(item) {
    return _$._is('Number', true)(item)
  }

  static isBoolean(item) {
    return _$._is('Boolean', true)(item)
  }
}

// 拼音汉字互转
/* 获取汉语拼音, abbrev: 是否获取拼音缩写，aleph: 是否只获取首字母 */
export function getPinYin({ text = '', abbrev = true, aleph = true }) {
  if (!text) return ''
  let result = ''

  if (abbrev) {
    result = chinese2pinyin({ cn: text, threshold: 0 })
  } else {
    result = chinese2pinyin({ cn: text })
  }
  if (aleph) {
    result = result.charAt(0)
  }
  return result
}

// console.log(getPinYin({ text: '刘德华' })) // return 'L'
