import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
    Card,
    Col,
    Container,
    Row,
    CardBody,
    CardTitle,
    FormGroup,
    Label,
    Button,
    Form,
    Input,
    
} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import { addNewUser } from "../../store/users/action"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AddUser = () =>  {
    

    {
        const dispatch = useDispatch()
        const history = useHistory()
       
        function handleSubmit(event, errors, values) {
            event.preventDefault()
            setloading(true)
            
            dispatch(addNewUser(obj, history))
            console.log("all values", values)
            console.log("all values", obj)
          }
        
        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>FieldX | Add User</title>
                    </MetaTags>
                    <Container fluid={true} >
                        <Breadcrumbs title="Add New User" breadcrumbItem="Add New User" />
                        <Row>
                            <Col md={6} className='m-auto'>
                                <Card >
                                    <CardBody >
                                        <CardTitle className="h4 mb-4">Add User</CardTitle>

                                        <Form onSubmit={handleSubmit} >
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-firstname-Input">First name</Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="formrow-firstname-Input"
                                                            placeholder='Type User Name'
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-InputPhone">Phone</Label>
                                                        <Input
                                                            type="number"
                                                            className="form-control"
                                                            id="formrow-InputPhone"
                                                            placeholder='Type User Phone'
                                                        />
                                                    </FormGroup>
                                                </Col>

                                            </Row>

                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-email-Input">Email</Label>
                                                        <Input
                                                            type="email"
                                                            className="form-control"
                                                            id="formrow-email-Input"
                                                            placeholder='Type Email address'
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-InputState">Select Role</Label>
                                                        <Input
                                                            id="formrow-InputState"
                                                            className="form-control"
                                                            type="select"
                                                        >
                                                            <option>Choose...</option>
                                                            <option>...</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col md={12}>

                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formFile" className="form-label">Upload User Image</Label>
                                                        <Input className="form-control" type="file" id="formFile" />
                                                    </FormGroup>


                                                </Col>
                                            </Row>

                                            <Row>

                                               
                                                <Col md={6}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-password-Input">Password</Label>
                                                        <Input
                                                            type="password"
                                                            className="form-control"
                                                            id="formrow-password-Input"
                                                            placeholder='Type Password'
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-confirmPassword-Input">Confirm Password</Label>
                                                        <Input
                                                            type="password"
                                                            className="form-control"
                                                            id="formrow-confirmPassword-Input"
                                                            placeholder='Type Confirm Password'
                                                        />
                                                    </FormGroup>
                                                </Col>

                                            </Row>

                                            
                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">
                                                   Save User
                                                </button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>


                        </Row>
                        {/* end row  */}



                    </Container>
                    {/* container-fluid */}
                </div>
            </React.Fragment >
        )
    }
}

export default AddUser
