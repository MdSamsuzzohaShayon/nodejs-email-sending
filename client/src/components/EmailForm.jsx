import React, { Component } from 'react';
import { Button, Container, Grid, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';

// name, email, message, button

class EmailForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        sent: false
    }


    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    handlMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            message: this.state.message,
        }

        axios.post('/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true
                }, this.resetForm());
            })
            .catch(err => {
                console.log("Message not sent: ", err);
            });
    }

    // RESET INITIAL DATA
    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });

        setTimeout(()=>{
            this.setState({
                sent: false
            })
        }, 3000);
    }




    render() {
        return (
            <Container style={{ fontStyle: "italic" }}>
                <br />
                <br />
                <br />
                <Grid >
                    <Grid.Row>
                        <Grid.Column width={3}>

                        </Grid.Column>
                        <Grid.Column width={10}>
                            {/* FORM START */}
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Field>
                                    <label>First Name</label>
                                    <input required type="text" name="f_name" placeholder='First Name' value={this.state.firstName} onChange={this.handleFirstName} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Last Name</label>
                                    <input required type="text" name="l_name" placeholder='Last Name' value={this.state.lastName} onChange={this.handleLastName} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <input required type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleEmail} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Message</label>
                                    <TextArea required type="text" placeholder='Message' value={this.state.message} onChange={this.handlMessage} />
                                </Form.Field>
                                <div className={this.state.sent ? "ui message green": "ui message"}>Message has been sent</div>
                                <Button type="submit" color="blue" type='submit' >Submit</Button>
                            </Form>
                            {/* FORM ENDS */}
                        </Grid.Column>
                        <Grid.Column width={3}>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default EmailForm;

