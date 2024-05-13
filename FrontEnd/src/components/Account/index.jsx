import PropTypes from "prop-types";
import { useState } from "react";
import Collapse from "../Collapse";
import "./index.scss";

export default function Account({ titled, totalBalance, description }) {
  const [viewAccount, setViewAccount] = useState(false);

  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{titled}</h3>
          <p className="account-amount">{totalBalance}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          {!viewAccount && (
          <button
            onClick={() => setViewAccount(!viewAccount)}
            className="transaction-button">
            View transactions
          </button>
          )}
          {viewAccount && (
          <button
            onClick={() => setViewAccount(!viewAccount)}
            className="transaction-button">
            Close transactions
          </button>
          )}
        </div>
      </section>
      {viewAccount && (
        <section className="view-account">
          <table className="container-table">
              <tr className="titled-table">
                <div className="titled-left">
                  <th>Date</th>
                  <th>Description</th>
                </div>
                <div className="titled-right">
                  <th>Amount</th>
                  <th>Balance</th>
                </div>
              </tr>
          </table>
          <Collapse />
          <Collapse />
          <Collapse />
          <Collapse />
        </section>
      )}
    </>
  );
}

Account.propTypes = {
  titled: PropTypes.string.isRequired,
  totalBalance: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
