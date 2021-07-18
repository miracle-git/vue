export function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

export function removeClass(el, className) {
  el.classList.remove(className)
}

export function append(el) {
  const style = getComputedStyle(el)
  if (!['absolute', 'fixed', 'relative'].includes(style.position)) {
    addClass(el, 'g-relative')
  }
  el.appendChild(el.instance.$el)
}

export function remove(el) {
  removeClass(el, 'g-relative')
  el.removeChild(el.instance.$el)
}
