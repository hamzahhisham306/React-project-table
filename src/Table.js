import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class SmallExample extends React.Component {
    render(){
     const Tbody=this.props.arrayDate.filter(data=>data!=='').map((data, index)=>{
        return <tr key={index}>
            <td>{index}</td>
            <td>{data.Name}</td>
            <td>{data.Type}</td>
            <td>{data.Price}</td>
            </tr>
     })
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name </th>
          <th>Type</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Tbody}
      </tbody>
    </Table>
  );
}
}
export default SmallExample;