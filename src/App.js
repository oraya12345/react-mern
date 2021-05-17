import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BrowserRouter as Router, Switch,  Link, Route } from 'react-router-dom';

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
         <NavBar bg="dark" variant="dark">
           <Container>
             <NavBar.Brand>
               <Link to={"/create-student"} className="nav-link">
                  React MERn Stack CRUD
               </Link>
             </NavBar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} class="nav-link">
                    create student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} class="nav-link">
                    student list
                  </Link>
                </Nav>
              </Nav>
           </Container>
         </NavBar>
       
       <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateStudent}/>
                  <Route  path="/create-student" component={CreateStudent}/>
                  <Route  path="/edit-student/:id" component={EditStudent}/>
                  <Route  path="/student-list" component={StudentList}/>
                </Switch>
              </div>
            </Col>
          </Row>
       </Container>
    </div>

    </Router>
  );
}

export default App;
