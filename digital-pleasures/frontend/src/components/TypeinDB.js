import React, { useState } from "react";


function TypeinDB({ onFilter }) {
  const [filteredButton, setFilteredButton] = useState()
  const getUserByType = (isAdmin) => async () => {
    if (isAdmin === filteredButton) {
      setFilteredButton('')
      onFilter(undefined)
      return
    }
    try {
      const response = await fetch('/api/users' + `?isAdmin=${isAdmin.toString()}`);
      const data = await response.json();
      onFilter(data.users)
      setFilteredButton(isAdmin)

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4 ">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              UserType in Data Base
            </h5>
          </div>

          <div className="card-body">
            <div className="row content">

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <button onClick={getUserByType(false)} className={`card-body ${filteredButton === false ? 'bg-dark' : ''}`}>User</button>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <button onClick={getUserByType(true)} className={`card-body ${filteredButton === true ? 'bg-dark' : ''}`}>Admin</button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeinDB;
