import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Tbody extends React.Component{
    render(){
      

        return(
            <>
        <tr>
            <td></td>
        <td>{this.props.Name}</td>
        <td>{this.props.Type}</td>
        <td>{this.props.Price}</td>
        </tr>
            </>
        );
    };
}

export default Tbody;