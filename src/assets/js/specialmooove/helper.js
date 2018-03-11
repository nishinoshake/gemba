export function eachElement (elm, callback) {
  for (let i = 0, length = elm.length; i < length; i++) {
    callback(elm[i], i)
  }
}
