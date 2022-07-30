import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
class BasicExample extends React.Component {
   constructor(props){
    super(props);
    this.state={
        Name:'',
        Type:'',
        Price:'',
        arrayDate:[]
    }
  
   }
   handlerSubmit=(event)=>{
      event.preventDefault();
      this.setState({
        Name:event.target.Name.value,
        Type:event.target.Type.value,
        Price:event.target.Price.value
      });
      
      this.state.arrayDate.push({
          Name:this.state.Name,
          Type:this.state.Type,
          Price:this.state.Price
      })
   
    
      }

    render(){
  return (
    <>
    <Form onSubmit={this.handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name Food</Form.Label>
        <Form.Control type="text" placeholder="Enter Food" name='Name'/>
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Select aria-label="Default select example" name='Type'>
      <option>Select type of food</option>
      <option value="1">Fruit and vegtables</option>
      <option value="2">Protin</option>
      <option value="3">Fat</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price"  name='Price'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Table arrayDate={this.state.arrayDate} />
    </>
  );
}
}

export default BasicExample;