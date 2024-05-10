import Form from "../../components/Form"
import "./index.scss"

export default function SignIn() {
  return (
    <div className="container-form">
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
    </div>
  )
}