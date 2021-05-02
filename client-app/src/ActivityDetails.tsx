import React from 'react';
import { Button, Card, Icon,Image, Label } from 'semantic-ui-react';
import { Activity } from './Activity';

interface Props{
    activity: Activity;
}

export default function ActivityDetails({activity}:Props){
    return(
        <Card>
        <Image src='asstets/movieCard.jpg' />
     <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{activity.year}</span>
      </Card.Meta>
      <Card.Description>
       {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>
          <Label>{activity.imdb}</Label>
          <Label>{activity.quality}</Label>
          <Label>{activity.genre}</Label>
          <Label>{activity.duration} min</Label>
          <Button basic color='blue'>Edit</Button>
          <Button basic color='green'>Cancel</Button>
      </p>
    </Card.Content>
  </Card>
    )
}