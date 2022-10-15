import styles from './Fields.module.css'
export const TextFieldAdapter = (props) => {
  console.log(props.meta.error)
  return (
    <div>
      <div className={styles.formControl + " " + (props.meta.touched && props.meta.error ? styles.error : "")}>
        {props.children}
      </div>
      {props.meta.touched && props.meta.error && <span className={styles.error}>{props.meta.error}</span>}
    </div>  
  )
}
export const Textarea = (props) => {
  const {input, child, meta, ...rest} = props
  return <TextFieldAdapter {...props}><textarea {...input} {...rest} /></TextFieldAdapter>
}
export const Input = (props) => {
  const {input, child, meta, ...rest} = props
  return <TextFieldAdapter {...props}><input {...input} {...rest} /></TextFieldAdapter>
}
/* export const Checkbox = (props) => {
  const {input, child, meta, ...rest} = props
  return <dhd {...props}></dhd>
} */



  