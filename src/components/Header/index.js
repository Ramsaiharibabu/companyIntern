
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SpokeIcon from '@mui/icons-material/Spoke';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Data from '../../data'
import './index.css' 

function Header() { 

  let data = Data["patient"] 
  console.log(data)
  return (
    <div className='header-card'> 
        <h1 className='main-head'><u>Medications</u></h1>
        <div className='bg-card'>
            <div className='bb'>
                <PersonIcon  sx={{ fontSize: 20 }} color="action"/>
                <h4 className='small-head'>Patient Name: {data[0].name}</h4>
            </div> 
            <div className='bb'>
                <CalendarMonthIcon  sx={{ fontSize: 20 }} color="action"/>
                <h4 className='small-head'>DOB: {data[0].dob} </h4>
            </div> 
            <div className='bb'>
                <EventAvailableIcon  sx={{ fontSize: 20 }} color="action"/>
                <h4 className='small-head'>DOA: {data[0].dateOfIssues} </h4>
            </div> 
            <div className='bb'>
                <BloodtypeIcon  sx={{ fontSize: 20 }} color="action"/>
                <h4 className='small-head'>BP : {data[0].bp}</h4>
            </div> 
            <div className='bb'>
                <SpokeIcon  sx={{ fontSize: 20 }} color="action"/>
                <h4 className='small-head'>SpO2 : {data[0].spo2}</h4>
            </div> 
            <div className='bb'>
                <LocalPhoneIcon  sx={{ fontSize: 20 }} color="action"/>
                <h4 className='small-head'>Contact Number: {data[0].phoneNumber}</h4>
            </div> 
            
            
        </div>
    </div>
  )
}

export default Header
