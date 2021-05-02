import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';


export default function ActivityForm(){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeholder='title' />
                <Form.Input placeholder='description' />
                <Form.Input placeholder='year' />
                <Form.Input placeholder='imdb' />
                <Form.Input placeholder='duration' />
                <Form.Input placeholder='quality' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' positive type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}