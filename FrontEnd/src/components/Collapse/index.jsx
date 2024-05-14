import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./index.scss";

export default function Collapse() {
  const [openCollapse, setOpenCollapse] = useState(false);

  return (
    <table className="collapse-container">
      <thead className="collapse-first-line">
        <tr className="collapse-items">
          <th className="date-description">
            <p>27/02/20</p>
            <p>Golden Sun Bakery</p>
          </th>
          <th className="amount-balance">
            <p>$8.00</p>
            <p>$298.00</p>
          </th>
        </tr>
        <tr>
          <th>
            <span>
              <FaChevronDown
                className={openCollapse ? "open" : "close"}
                onClick={() => setOpenCollapse(!openCollapse)}
              />
            </span>
          </th>
        </tr>
      </thead>
      {openCollapse && (
        <tbody className="table-content">
          <tr className="first-colone">
            <td>Transaction type</td>
            <td>Category</td>
            <td>Note</td>
          </tr>
          <tr className="second-colone">
            <td>Electronic</td>
            <td>Food sp <span><FaPencil /></span></td>
            
            <td>Lorem ipsum <span><FaPencil /></span></td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
