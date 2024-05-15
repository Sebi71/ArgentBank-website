import { Link } from "react-router-dom"

import "./index.scss"

export default function NotFound() {
  return (
    <div className="error-container">
        <h2 className="number-error">404</h2>
        <p className="text-error">Oops ! The page you are requesting does not exist.</p>
        <Link 
        className="link-to-home"
        to="/">
           Return to home page
        </Link>
    </div>
  )
}