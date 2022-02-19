
import './App.css';
import { Typography } from '@mui/material';
import TabPanel from './TabPanel'
import { typography } from '@mui/system';

function App() {
  
  return (
    <div className="App" >
      <div style={{width:"100%",backgroundColor:"black",height:75}}>
        <typography variant="h1"align="left" style={{color:"white", fontSize:"36px",marginTop:"10px",fontWeight:700,height:"43px",position:"absolute",left:50,top:5}} >Edvora</typography>
      </div>
     <TabPanel/>
    </div>
  );
}

export default App;
