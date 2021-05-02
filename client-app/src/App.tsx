import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Container, Header, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from './ActivityDashboard';
import { Activity } from './Activity';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() =>{
    axios.get<Activity[]>('http://localhost:5000/api/MovieActivities/').then(response =>{
      console.log(response);
      setActivities(response.data);
    })
  },[])



  return (
    <div>
      <Container>
        <NavBar/>
        <ActivityDashboard activities={activities}/>
      </Container>
       
    </div>
  );
}

export default App;
