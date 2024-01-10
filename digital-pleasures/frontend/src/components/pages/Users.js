import React, { useState } from 'react';
import Card from '../Card';
import LastInDb from '../LastInDb';
import TypeinDB from '../TypeinDB';
import Chart from '../Chart';

function Users(props) {
    const [filteredUsers, setFilteredUsers] = useState()
    const onFilter = (users) => setFilteredUsers(users)

    return (

        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <Card
                        type='user'
                    />


                    {props?.users?.count > 0 ?
                        <>
                            <div className="row holder">
                                <LastInDb
                                    type='user'
                                    content={props?.users?.users[props?.users?.count - 1]} />
                                <TypeinDB onFilter={onFilter} />
                            </div>

                            <Chart
                                type='user'
                                content={filteredUsers || props.users.users}
                            />
                        </>
                        : <p>Cargando...</p>}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Users;