import React from 'react'
import './Parent.css';

const ParentComponent = (props) => {
  return (
    <div className='Student'>
    <table>
      <tr>
      <th>Name</th>
      <td>{props.name}</td>
      </tr>
      <tr>
      <th>age</th>
      <td>{props.age}</td>
      </tr>
      <tr>
      <th>ismarried</th>
      <td>{props.ismarried ? "Yes" : "No"} </td>
      </tr>
    </table>
    </div>
  )
}

export default ParentComponent
