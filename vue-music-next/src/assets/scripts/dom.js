export function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

export function removeClass(el, className) {
  el.classList.remove(className)
}

export function append(el) {
  el.appendChild(el.instance.$el)
}

export function remove(el) {
  el.removeChild(el.instance.$el)
}
