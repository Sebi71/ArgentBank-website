import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./index.scss"

export default function Collapse() {
    const [openCollapse, setOpenCollapse] = useState(false)

  return (
    <table className="collapse-container">
        <thead className="collapse-first-line">
            <tr className="collapse-items">
                <div className="date-description">
                    <th>27/02/20</th>
                    <th>Golden Sun Bakery</th>
                </div>
                <div className="amount-balance">
                    <th>$8.00</th>
                    <th>$298.00</th>
                </div>
            </tr>
                <FaChevronDown 
                className={openCollapse ? "open" : "close"}  
                onClick={() => setOpenCollapse(!openCollapse)}/>
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
                <td>Food <FaPencil /></td>
                <td>Lorem ipsum <FaPencil /></td>
            </tr>
        </tbody>
        )}
    </table>
  )
}