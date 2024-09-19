import { FiUser } from "react-icons/fi"
import { RiLockPasswordLine } from "react-icons/ri"
import { Form, Link } from "react-router-dom"
import Wrapper from "../css/Login"

const Register = () => {
  return <Wrapper>

    <div className="register-form">
      <div className="form-title">
        <h2>Sign up for an Account</h2>
      </div>
      <Form className="form-control">
        <div className="parent-container">
          <div className="name-container">
            <FiUser />
            <input type="text" name="name" placeholder="Your name" className="name" />
          </div>
          <div className="email-container">
            <FiUser />
            <input type="email" name="email" placeholder="Your email" className="email" />
          </div>
          <div className="password-container">
            <RiLockPasswordLine />
            <input type="password" name="password" placeholder="Your password" className="password" />
          </div>
        </div>
        <div>
          <button type="submit" className="login-btn">submit</button>
        </div>
      </Form>
      <div className="login-link">
        <p>Masz konto?</p>
        <Link to={'/login'}><span>Login</span></Link>
      </div>
    </div>
  </Wrapper>
}
export default Register

