const countObjectProperties = obj => {
  if (typeof obj === 'object') {
    return Object.values(obj).length
  } else {
    return 0
  }
}

export {
  countObjectProperties
}
