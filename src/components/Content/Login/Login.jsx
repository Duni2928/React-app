import { Form,Field } from 'react-final-form'
import { connect } from 'react-redux'
import {logIn} from "./../../../redux/auth-reducer";
import { required, minValue } from '../../../utils/validators/validators'
import { Input} from '../../common/Fields/Fields'
import c from './Login.module.css'
import { Navigate } from 'react-router-dom';
import styles from './../../common/Fields/Fields.module.css'
const Login = (props) => {
  const onSubmit = (formData) => {
    props.logIn(formData.email,formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  } else {
    return <div>
    <div className={c.text}>Login</div>
    <LoginForm onSubmit={onSubmit} loginForm={props.loginForm}/>
  </div>
  }
}
const LoginForm = ({onSubmit, loginForm}) => {
  const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit}) => ( 
        <form onSubmit={handleSubmit} className={c.input}>       
          <Field type="text" component={Input} name="email" placeholder="e-mail" validate={required}/>
          <Field type="password" component={Input} name="password" placeholder="password" validate={required} />
          <label className={c.checkbox}>
            <Field type="checkbox" component={Input} name="rememberMe" checked/>
            <span className={c.checkboxSpan}>Save password</span>
          </label>
          <Field name="favoriteColor" component="select">
            <option value="#ff0000">❤️ Red</option>
            <option value="#00ff00">💚 Green</option>
            <option value="#0000ff">💙 Blue</option>
          </Field>
          <div className={c.radio}>
            <label>
              <Field type='radio' component="input" name='handRight' value="Правша" checked></Field>
              Правша
            </label>
            <label>
              <Field type='radio' component="input" name='handLeft' value="Левша"></Field>
              Левша
            </label>
          </div>
          <Field type='checkbox' component="input" name='handLef' checked/>
          <span>fac</span>
          <Field type="text" component={Input} name="age" validate={composeValidators(required, minValue(18))}/>
          <button type='submit'>Отправить</button>
           {loginForm && <span className={styles.error}>{loginForm}</span>}
        </form>
      )}
    />
  )
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    loginForm: state.auth.errors.loginForm,
  }
}
export default connect(mapStateToProps, {logIn})(Login)