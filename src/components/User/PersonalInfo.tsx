import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showEmailContainer, showTelephoneContainer } from "../../features/userToggleSlice";
import { useAppSelector } from "../../hooks/hooks";

const PersonalInfo = () => {

  const { firstName, lastName, username, telephone } = useAppSelector((state) => state.userSlice);

  const dispatch = useDispatch();
  const handleEmailChange = () => {
    dispatch(showEmailContainer());
  }
  const handleTelephoneChange = () => {
    dispatch(showTelephoneContainer());
  }
  return <section className="personal-info">
    <div className="profile-title">
      <h2>My details</h2>
    </div>
    <div className="user-info">
      {/**NAME */}
      <div className="name-container">
        <div className="name">
          <h4>Name</h4>
          <p>{firstName + " " + lastName}</p>
        </div>
        <Link to={'/my-account/edit-name'} className="edit-btn" >edit</Link>
      </div>
      {/** EMAIL */}
      <div className="email-container">
        <div className="email">
          <h4>Email</h4>
          <p>{username}</p>
        </div>
        <button className="edit-btn" onClick={() => handleEmailChange()} >edit</button>
      </div>
      {/** TELEPHONE */}
      <div className="telephone-container">
        <div className="telephone">
          <h4>Telephone</h4>
          <p>{telephone}</p>
        </div>
        {
          telephone ? <button className="edit-btn" onClick={() => handleTelephoneChange()} >edit</button> : <button className="edit-btn" onClick={() => handleTelephoneChange()} >Add number</button>
        }
      </div>

      {/** PASSWORD */}
      <div className="password-container">
        <div className="password">
          <h4>Password</h4>
          <p>{''}</p>
        </div>
        <Link to={'/my-account/change-password'} className="change-btn">Change password</Link>
      </div>
    </div>
  </section>
}
export default PersonalInfo