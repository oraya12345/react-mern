import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class EditeStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            age: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
        .then(res => {
            this.setState({
              name: res.data.name,
              lastname: res.data.lastname,
              age: res.data.age
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onChangeStudentName = (e) => {
        this.setState({ name: e.target.value})
    }

    onChangeStudentLastname = (e) => {
        this.setState({ lastname: e.target.value})
    }

    onChangeStudentAge = (e) => {
        this.setState({ age: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const studentObject = {
            name: this.state.name,
            lastname: this.state.lastname,
            age: this.state.age
        };

        axios.put('http://localhost:4000/students/update-student/'  + this.props.match.params.id, 
        studentObject).then((res) => {
            console.log(res.data);
            console.log('Student successfully Updated');
        }) 
        .catch((error) => {
            console.log(error)
        });
        
        // Redirect to student list
        this.props.history.push('/student-list');
    }



    render() {
        return (
            <div className="form-wrapper mt-5">
            <h1> Update Student </h1>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                </Form.Group>

                <Form.Group controlId="Lastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="lastname" value={this.state.lastname} onChange={this.onChangeStudentLastname}/>
                </Form.Group>

                <Form.Group controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" value={this.state.age} onChange={this.onChangeStudentAge}/>
                </Form.Group>

                <Button variant="success" size="lg" block="block" type="submit">
                Update Student
                </Button>
            </Form>
        </div>
        )
    }
}
