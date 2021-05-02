import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';


export default function NavBar(){
    return(
        <Menu fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='assets/logo.png' />CinemaApp
                </Menu.Item>
                <Menu.Item name='Movies' />
                <Menu.Item>
                    <Button baseic color='violet' content='Create A Movie' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}