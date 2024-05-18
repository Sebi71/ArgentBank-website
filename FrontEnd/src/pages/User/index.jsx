import { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Navigate } from "react-router-dom";
import Account from "../../components/Account";
import EditUser from "../../components/EditUser";
import accountsData from "../../data/accountsData.json";
import "./index.scss";

export default function User() {
  const [editprofile, setEditProfile] = useState(false);

  const connect = useSelector((state) => state.signIn.isLoggedIn);
  const user = useSelector((state) => state.profile.user);
  // const [userName, setUserName] = useState(user?.userName);

  const viewProfile = () => {
    setEditProfile(!editprofile);
  };

  if (!connect) {
    return <Navigate to="/login" />
  } 

  return (
    <>
        <div className="container-count">
          <main className="main bg-dark">
            {!editprofile && (
              <div className="header">
                <h1>
                  Welcome back
                  <br />
                  {`${user?.firstName} ${user?.lastName}`}
                </h1>
                <button onClick={viewProfile} className="edit-button">
                  Edit Name
                </button>
              </div>
            )}
            {editprofile && 
            <EditUser 
              close={viewProfile}
              userName={user?.userName}
              firstName={user?.firstName}
              lastName={user?.lastName} />}
            <h2 className="sr-only">Accounts</h2>
            {accountsData.accounts.map((accountData) => (
              <Account
                key={nanoid(8)}
                titled={accountData.title}
                totalBalance={accountData.amount}
                description={accountData.description}
              />
            ))}
          </main>
        </div>
    </>
  );
}
