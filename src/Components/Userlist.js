import React from 'react'
import TableContent from './TableContent/TableContent'
import { Link } from 'react-router-dom'


const Userlist = () => {
    return (
        <>
               <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User List</h1>
        <Link to="/Forms" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Create Users</Link>
    </div>
        
    <div class="container">
        <div class="row col-md-6 col-md-offset-2 custyle">
        <table class="table table-striped custab">
        <thead>
     
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Parent ID</th>
                <th class="text-center">Action</th>
            </tr>
        </thead>
        <TableContent />
        <TableContent />
        <TableContent />
        <TableContent />
        <TableContent />
        <TableContent />
        <TableContent />
        <TableContent />
       
    
        </table>
       
    </div>
</div>
      
        </>
 
    )
}

export default Userlist
