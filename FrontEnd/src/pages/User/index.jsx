import Account from "../../components/Account";
import EditUser from "../../components/EditUser";
import { useState } from "react";
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
        <Account
          titled={"Argent Bank Checking (x8349)"}
          totalBalance={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          titled={"Argent Bank Savings (x6712)"}
          totalBalance={"$10,928.42"}
          description={"Available Balance"}
        />
        <Account
          titled={"Argent Bank Credit Card (x8349)"}
          totalBalance={"$184.30"}
          description={"Current Balance"}
        />
      </main>
    </div>
  );
}
