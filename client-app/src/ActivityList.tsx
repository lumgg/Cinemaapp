import React from 'react';
import { Button, Item, Segment } from 'semantic-ui-react';
import { Activity } from './Activity';

interface Props{
    activities: Activity[];
}
   


export default function ActivityList({activities}:Props){
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activity =>(
                    <Item key ={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.description}</Item.Meta>
                            <Item.Meta>{activity.year}</Item.Meta>
                            <Item.Meta>{activity.genre}</Item.Meta>
                            <Item.Meta>{activity.quality}</Item.Meta>
                            <Item.Meta>{activity.duration}</Item.Meta>
                            <Item.Meta>{activity.imdb}</Item.Meta>
                            <Button basic color='blue'>View</Button>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}