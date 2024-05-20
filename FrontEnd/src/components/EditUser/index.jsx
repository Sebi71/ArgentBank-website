import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, profile } from "../../services/callAPI";
import { useState } from "react";
import Loader from "../Loader";
import "./index.scss";

export default function EditUser({ close, userName, firstName, lastName }) {
  const [editUser, setEditUser] = useState(userName)

  const error = useSelector((state) => state.editProfile.error);
  const loading = useSelector((state) => state.editProfile.loading);
  
  const dispatch = useDispatch();
  
  const profilSubmit = async (e) => {
    e.preventDefault();
    
    const success =await dispatch(editProfile({newUserName: editUser}))
    
    if(editProfile.fulfilled.match(success)){
      dispatch(profile())
      close()
    } 
  };

  return (
    <>
      <h2 className="title-edit">Edit user info</h2>
      <div className="form-container">
        {loading ? (
          <Loader />
          ) : (
            <form  onSubmit={profilSubmit}>
            <div className="input-line">
              <label htmlFor="userName">User name :</label>
              <input
                className="input-info"
                type="text"
                id="userName"
                value={editUser}
                required
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
                {error && <span className="error-message">Service unavailable, please try again later</span>}
            <div className="form-btn">
              <button 
                type="submit" 
                className="edit-btn">
                  Save
              </button>
              <button 
                type="cancel" 
                className="edit-btn" 
                onClick={close}>
                  Cancel
              </button>
            </div>
          </form>
      )}  
      </div>
    </>
  );
}

EditUser.propTypes = {
  close: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
