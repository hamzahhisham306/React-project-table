import Navbar from './Navbar';
import './App.css';
import Form from './Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <Container>
      <Row>
        <Col><Navbar/></Col>
        </Row>
        <Form/>
      
    </Container>
  );
}

export default App;
