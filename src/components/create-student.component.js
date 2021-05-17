import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class CreateStudent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            lastname: '',
            age: ''
        }
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

        axios.post('http://localhost:4000/students/create-student', studentObject).then(res => 
        console.log(res.data));

        // console.log('Student successfully created!');
        // console.log(`Name:${this.state.name}`);
        // console.log(`Email:${this.state.email}`);
        // console.log(`Roll no:${this.state.rollno}`);
     
        this.setState({
            name:'',
            lastname:'',
            age:''
        })
    }

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1> Create Student </h1>
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
                    Create Student
                    </Button>
                </Form>
            </div>
        )
    }
}
