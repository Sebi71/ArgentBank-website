import Account from "../../components/Account";
import EditUser from "../../components/EditUser";
import { useState } from "react";
import { nanoid } from "nanoid";
import accountsData from "../../data/accountsData.json"
import "./index.scss";

export default function User() {
  const [editprofile, setEditProfile] = useState(true);

  return (
    <div className="container-count">
      <main className="main bg-dark">
        {editprofile && (
          <div className="header">
            <h1>
              Welcome back
              <br />
              Tony Jarvis!
            </h1>
            <button
              onClick={() => setEditProfile(!editprofile)}
              className="edit-button"
            >
              Edit Name
            </button>
          </div>
        )}
        {!editprofile && <EditUser />}
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
  );
}
