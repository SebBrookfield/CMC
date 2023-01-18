const flattenArray = <T>(array: [T]) => {
  return JSON.stringify(array)
}

const isArray = (obj: [any]): obj is [any] => {
  return Array.isArray(obj)
}

const isObject = (obj: {}): obj is {} => {
  return typeof obj === "object"
}

const flattenInternal = (obj: any, flattenedObject: any, prefix?: string) => {
  for (let prop in obj) {
    const propName = prefix ? `${prefix}.${prop}` : prop
    const value = obj[prop]

    if (isArray(value)) {
      flattenedObject[propName] = flattenArray(value)
    } else if (isObject(value)) {
      flattenInternal(value, flattenedObject, propName)
    } else {
      flattenedObject[propName] = value
    }
  }
  return flattenedObject
}

export const flatten = (obj: any, prefix?: string) => {
  return flattenInternal(obj, {})
}
