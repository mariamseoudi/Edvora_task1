import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fontFamily, height } from '@mui/system';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import map from './image 1.png';

import FilterListIcon from '@mui/icons-material/FilterList';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rides from './Rides';
import InputLabel from '@mui/material/InputLabel';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  

  return (
    <div
   
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  
  const ride= [
    {
      id: "001",
      origin_station_code: 23,
      station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
      destination_station_code: 93,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
    {
      id: "002",
      origin_station_code: 20,
      station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
      destination_station_code: 98,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
    {
      id: "003",
      origin_station_code: 13,
      station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
      destination_station_code: 91,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
  ]
  
  const user=  {
    station_code: 40,
    name: "Dhruv Singh",
    profile_key: "url"
 }
 const [cityList,setCityList]=React.useState(ride.map(u=>{return u.city}).filter((value, index, self) => self.indexOf(value) === index));
 const [stateList,setStateList]=React.useState(ride.map(u=>{return u.state}).filter((value, index, self) => self.indexOf(value) === index));
 const [state,setState]=React.useState("");
 const [city,setCity]=React.useState("");
 
 //const[min,setMin]=React.useState(9999);
 React.useEffect(
   ()=>{
     if( state!==""){
setCityList(ride.filter(function (e) {
  return e.state===state;
}).map(u=>{return u.city}).filter((value, index, self) => self.indexOf(value) === index));
   }
  else{
    setCityList(ride.map(u=>{return u.city}).filter((value, index, self) => self.indexOf(value) === index));
  }}
  ,[state])
 function findMin (station_path,code) {
   var min=9999999;
  for(var i=0;i<station_path.length;i++){
    if(Math.abs(code-station_path[i])<min){
    min= Math.abs(code-station_path[i])
    }
   
  }
  return min;
};
const handleCallback1 = (childData) =>{
  this.setNearest( childData.length);
}
const handleCallback2 = (childData) =>{
  this.setUp( childData.length);
}
const handleCallback3 = (childData) =>{
  this.setPrev( childData.length);
}


  function pastRides  ()  {
    return ride.filter(function (e) {
      return new Date(e.date) < new Date();
  });
  };
  function UpcomingRides  ()  {
    return ride.filter(function (e) {
      return new Date(e.date) >= new Date();
  });
  };
 function NearestRides () {
  return ride.sort((a,b) => {
    return findMin(a.station_path,user.station_code) - findMin(b.station_path,user.station_code);
});
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: '100%',height:1000  ,color: 'Black' }} style={{ backgroundColor:  ' #171717' ,fontFamily:'inter'}}>
    {console.log(pastRides())}
      <Box sx={{ borderBottom: 1, borderColor: 'divider',marginLeft:5 }}>
        <Tabs value={value} onChange={handleChange}  TabIndicatorProps={{
    style: {
      backgroundColor: "white"
    ,color:"white" }
    }}
        indicatorColor="primary"
        aria-label="secondary tabs example">
          <Tab label={<span style={{fontSize:15}}>{"Nearest Rides".concat("(",NearestRides().length,")")}</span>} {...a11yProps(0)}style={value===0?{color:'white'}:{color:'#D0CBCB'}} />
          <Tab label={<span style={{fontSize:15}}>{"Upcoming Rides".concat("(",UpcomingRides().length,")")}</span>} {...a11yProps(1)} style={value===1?{color:'white'}:{color:'#D0CBCB'}}/>
          <Tab label={<span style={{fontSize:15}}>{"past Rides".concat("(",pastRides().length,")")} </span>}{...a11yProps(2)}style={value===2?{color:'white'}:{color:'#D0CBCB'}} />
        </Tabs>
      <Typography onClick={handleClickOpen} style={{color:"#A7A8AA",position:"absolute",right:22,top:85}}>   <FilterListIcon style={{color:"white"}}/>Filter</Typography>
      <Dialog s   PaperProps={{
    style: {
      backgroundColor: "#08090b",
      boxShadow: "none",
      height:190,
      width:228
    },
  }}open={open} onBackdropClick={handleClickClose} >
      <DialogTitle style={{color:"#A5A5A5"}}>Filters</DialogTitle>
      <hr style={{width:190 ,color:"#CBCBCB" , position:'relative',bottom:20}}/>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel  style={{color:"white"}}htmlFor="demo-customized-select-native">State</InputLabel>
        <Select
         style={{backgroundColor:"#232323",width:190,height:37 ,marginLeft:10,borderColor:"#232323"}}
          onChange={(e)=>setState(e.target.value)}
         label="state"
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
         { (stateList.map(u=>{return <MenuItem value={u}>{u}</MenuItem> }))}
          
        </Select>
       
      </FormControl>
      
  <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel  style={{color:"white"}}htmlFor="demo-customized-select-native">City</InputLabel>
        <Select
         style={{backgroundColor:"#232323",width:190,height:37 ,marginLeft:10,borderColor:"#232323"}}
          onChange={(e)=>setCity(e.target.value)}
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None   </em>
          </MenuItem>
          { (cityList.map(u=>{return <MenuItem value={u}>{u}</MenuItem> }))}
        </Select>
    
      </FormControl>
  
   </Dialog>
    </Box>
     <TabPanel value={value} index={0}>
     <Rides  rides={NearestRides()} city={city} state={state} code={user.station_code}></Rides>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Rides rides={UpcomingRides()}code={user.station_code}city={city} state={state}></Rides>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Rides  rides={pastRides()}code={user.station_code}city={city} state={state}></Rides>
      </TabPanel>
    </Box>
  );
}
