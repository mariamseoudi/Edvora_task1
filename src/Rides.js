import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import map from './image 1.png';

function Rides(props) {
    const moment = require('moment');
    const [rides,setRides]=React.useState(props.rides);
    function findMin (station_path,code) {
        var min=9999999;
       for(var i=0;i<station_path.length;i++){
         if(Math.abs(code-station_path[i])<min){
         min= Math.abs( code-station_path[i])
         }
         
       }
       return min;
     };
React.useEffect(()=>{
    if(props.state!==""){
        setRides(rides.filter(function (e) {
            return e.state===props.state;
        }))
    }
    else{
        setRides(props.rides);
    }
    if(props.city!==""){
        setRides(rides.filter(function (e) {
            return e.city===props.city;
        }))
    }
   
    
  
  
}
,[props.state,props.city])
  return (
    <div>  <table style={{width:"100%",marginLeft:5 }} >
       
  {console.log(props.code)}
       
    {rides.map(u=>{return <tr>  <Box elevation={24} style={{backgroundColor:"#08090b",height:200,marginBottom:10 }}><tr> <td> <img style={{marginLeft:15,marginTop:23,marginBottom:7,position:'relative',width:"90%",height:140}}
  src={map}/></td><td style={{marginTop:3,marginLeft:10,position:"relative",bottom:128,right:80,color:"white",fontSize:18}}><Typography style={{color:'#D0CBCB',display:'inline',paddingLeft:0,position:'relative',right:8 }}>Ride Id:<span style={{color:"white"}}>{u.id}</span></Typography> <br/> <span style={{position:"relative" ,left:10}}><Typography style={{color:'#D0CBCB',display:'inline'}}>Origin Station:<span style={{color:"white"}}>{u.origin_station_code}</span></Typography> </span><br/><Typography align="left" style={{color:'#D0CBCB',display:'inline',position:'relative',left:97 }}>station_Path:<span style={{color:"white"}}>{u.station_path.toString()}</span></Typography><br/><Typography align="left" style={{color:'#D0CBCB',display:'inline',position:'relative',left:20 }}>Date:<span style={{color:"white"}}>{moment(new Date(u.date* 1000)).format('Do MMM YYYY').toString()}</span></Typography><br/><Typography align="left" style={{color:'#D0CBCB',display:'inline',position:'relative',right:13 }}>Distance:<span style={{color:"white"}}>{findMin(u.station_path,props.code)}</span></Typography></td>
<td style={{marginTop:20,position:"absolute",right:200,color:'white'}}> <Box  style={{width:120,height:25, backgroundColor:"black",borderRadius: 20,fontSize:15}}>{u.city}</Box></td><td style={{marginTop:20,position:"absolute",right:70,color:'white'}}><Box  style={{width:120,height:25, backgroundColor:"black",borderRadius: 20,fontSize:15}}>{u.state}</Box></td>
 
  </tr></Box></tr>

})} 
 </table></div>
  )
}

export default Rides