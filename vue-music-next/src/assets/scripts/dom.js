export function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

export function removeClass(el, className) {
  el.classList.remove(className)
}

export function append(el, name) {
  const style = getComputedStyle(el)
  if (!['absolute', 'fixed', 'relative'].includes(style.position)) {
    addClass(el, 'g-relative')
  }
  el.appendChild(el[name].instance.$el)
}

export function remove(el, name) {
  removeClass(el, 'g-relative')
  el.removeChild(el[name].instance.$el)
}
