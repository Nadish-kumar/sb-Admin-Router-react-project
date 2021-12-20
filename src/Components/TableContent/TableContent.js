import React from 'react'
import "./TableContent.css"
import { Link } from 'react-router-dom'


const TableContent = () => {
    return (
                 <tr>
                    <td>1</td>
                    <td>News</td>
                    <td>News Cate</td>
                    <td class="text-center"><Link to = '/Forms' class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</Link> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                </tr>
    )
}

export default TableContent
