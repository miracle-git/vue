function getRandom(prefix = '') {
  return prefix + (Math.random() + '').replace('0.', '')
}

module.exports = {
  getRandom
}
