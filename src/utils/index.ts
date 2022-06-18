function extend(src: object | Array<any>, dist: object | Array<any>, deep: boolean) {
  return { ...src, ...dist }
}

function isRealObject(obj: object) {
  return String.prototype.toString.call(obj)
}

function isObject(obj: object) {
  return typeof obj === 'object' && obj !== null
}

export { extend, isObject, isRealObject }
