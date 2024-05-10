import "./index.scss"

export default function User() {
  return (
    <div className="container-count">
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>

      </main>
    </div>
  )
}