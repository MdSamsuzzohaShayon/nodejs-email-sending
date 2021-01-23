import React from 'react';
import { Menu, Container, Segment } from "semantic-ui-react";

const FormMenu = () => {
    return (
        <Segment  inverted color="blue">
            <Menu inverted color="blue">
                <Container >
                    <Menu.Item name='editorials' content='Editorials' />
                    <Menu.Item name='reviews' content='Reviews' />
                    <Menu.Item name='upcomingEvents' content='Upcoming Events' />
                </Container>
            </Menu>
        </Segment>
    );
}


export default FormMenu;