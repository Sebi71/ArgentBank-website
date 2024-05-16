import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./index.scss";
import { editProfile } from "../../services/callAPI";
import { useState } from "react";

export default function EditUser({ close, userName, firstName, lastName }) {
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState("")
  // const newUserName = useSelector((state) => state.editProfile);
  
  const profilSubmit = (e) => {
    e.preventDefault();
  
    
    try {
      dispatch(editProfile(editUser))
    } catch (err) {
      // setError("Email or Password is incorrect");
    }

  };

  return (
    <>
      <h2 className="title-edit">Edit user info</h2>
      <form className="form-container">
        <div className="input-line">
          <label htmlFor="userName">User name :</label>
          <input
            className="input-info"
            type="text"
            id="userName"
            defaultValue={userName}
            onChange={(e) => {setEditUser(e.target.value)}}
          />
        </div>
        <div className="input-line">
          <label htmlFor="firstName">First name :</label>
          <input
            className="input-info input-disable"
            type="text"
            id="firstName"
            defaultValue={firstName}
            readOnly
          />
        </div>
        <div className="input-line">
          <label htmlFor="lastName">Last name :</label>
          <input
            className="input-info input-disable"
            type="text"
            id="lastName"
            defaultValue={lastName}
            readOnly
          />
        </div>
        <div className="form-btn">
          <button type="submit" className="edit-btn" onClick={profilSubmit}>
            Save
          </button>
          <button type="cancel" className="edit-btn" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

EditUser.propTypes = {
  close: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
