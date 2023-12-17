import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id":1,
            "firstName":"Swapnil",
            "lastName":"Kamble",
            "email":"sk9137587676@gmail.com"
        },
        {
            "id":2,
            "firstName":"Swapnil",
            "lastName":"Kamble",
            "email":"sk9137587676@gmail.com"
        },
        {
            "id":3,
            "firstName":"Swapnil",
            "lastName":"Kamble",
            "email":"sk9137587676@gmail.com"
        },
        {
            "id":4,
            "firstName":"Swapnil",
            "lastName":"Kamble",
            "email":"sk9137587676@gmail.com"
        }
    ]
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent