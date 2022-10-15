export const required = value => (value ? undefined : "Required")
export const minValue = min => value => {
 return value >= min ? undefined : `Should be greater than ${min}`
}
