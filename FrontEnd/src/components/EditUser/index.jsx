import "./index.scss"

export default function EditUser() {
  return (
    <>
        <h2 className="title-edit">Edit user info</h2>
        <form className="form-container">
            <div className="input-line">
                <label htmlFor="userName">User name :</label>
                <input 
                    className="input-info"
                    type="text" 
                    id="userName" 
                    defaultValue={"à remplacer"} 
                />
            </div>
            <div className="input-line">
                <label htmlFor="firstName">First name :</label>
                <input 
                    className="input-info input-disable"
                    type="text" 
                    id="firstName" 
                    defaultValue={"à remplacer"} 
                    readOnly 
                />
            </div>
            <div className="input-line">
                <label htmlFor="lastName">Last name :</label>
                <input 
                    className="input-info input-disable"
                    type="text" 
                    id="lastName"
                    defaultValue={"à ramplacer"}
                    readOnly
                />
            </div>
            <div className="form-btn">
                <button className="edit-btn">Save</button>
                <button className="edit-btn">Cancel</button>
            </div>
        </form>
    </>
  )
}