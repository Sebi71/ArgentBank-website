import Account from "../../components/Account";
import EditUser from "../../components/EditUser";
import { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import accountsData from "../../data/accountsData.json"
import "./index.scss";
import { Navigate } from "react-router-dom";

export default function User() {
  const [editprofile, setEditProfile] = useState(false);

  const connect = useSelector((state) => state.signIn.isLoggedIn);

  const viewProfile = () => {
    setEditProfile(!editprofile)
  }



  return (
    <>
      {!connect ? (
        <Navigate to="/login" />
      ) : (
      <div className="container-count">
        <main className="main bg-dark">
          {!editprofile && (
            <div className="header">
              <h1>
                Welcome back
                <br />
                Tony Jarvis!
              </h1>
              <button
                onClick={viewProfile}
                className="edit-button"
              >
                Edit Name
              </button>
            </div>
          )}
          {editprofile && <EditUser close={viewProfile} />}
          <h2 className="sr-only">Accounts</h2>
          {accountsData.accounts.map((accountData) => (
            <Account 
              key={nanoid(8)}
              titled={accountData.title}
              totalBalance={accountData.amount}
              description={accountData.description}
              />))}
        </main>
      </div>
      )}
    </>
  );
}
