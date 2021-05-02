import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from './Activity';
import ActivityDetails from './ActivityDetails';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';

interface Props{
    activities: Activity[];
}

export default function ActivityDashboard({activities}:Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} />
            </Grid.Column>

            <Grid.Column width='6'>
                
                <ActivityDetails activity={activities[0]} />
                <ActivityForm />
            </Grid.Column>
        </Grid>
    )
}
