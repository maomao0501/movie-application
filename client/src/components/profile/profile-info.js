import React from 'react';

const ProfileInfo = ({user}) => {
    return (
        <>
            <div className="mr-3">
                {/*TODO: update info*/}
                <h1 className="mx-auto text-primary">My Profile Info</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   readOnly
                                   className="form-control"
                                   id="usernameFld"
                                   value={user.name}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="emailFld" className="col-sm-2">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="emailFld"
                                   type="email"
                                   value={user.email}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="roleFld" className="col-sm-2">
                            Role
                        </label>
                        <div className="col-sm-10">
                            <select className="form-control"
                                    id="roleFld"
                                    value={user.role}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="updateBtn" className="col-sm-2 col-form-label">
                        </label>
                        <div className="col-sm-10">
                            <a href="#"
                               type="button"
                               className="form-control btn btn-success"
                               id="updateBtn">
                                Update
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfileInfo

