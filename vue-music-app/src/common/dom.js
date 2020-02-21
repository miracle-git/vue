export function addClass(element, className) {
  if (hasClass(element, className)) return

  const classNames = element.className.split(' ')
  classNames.push(className)
  element.className = classNames.join(' ').trim()
}

export function hasClass(element, className) {
  const regex = new RegExp(`(^|\\s)${className}(\\s|$)`)
  return regex.test(element.className)
}

export function dataAttr(element, attrName, value) {
  const prefix = 'data-'
  attrName = prefix + attrName
  if (value) {
    return element.setAttribute(attrName, value)
  } else {
    return element.getAttribute(attrName)
  }
}

const browserVendor = (() => {
  const elementStyle = document.createElement('div').style
  const transformNames = {
    ms: 'msTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    webkit: 'webkitTransform',
    standard: 'transform'
  }

  for (let prop in transformNames) {
    if (elementStyle[transformNames[prop]] !== undefined) {
      return prop
    }
  }

  return ''
})()

export function autoPrefix(styleName) {
  if (!browserVendor) return false
  if (browserVendor === 'standard') {
    return styleName
  }
  return `${browserVendor}${styleName.charAt(0).toUpperCase()}${styleName.substr(1)}`
}
