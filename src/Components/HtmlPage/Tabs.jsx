import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import { CircularProgress } from '@mui/material';


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
        <Box sx={{ p: 3  }}>
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

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>


      <h5 style={{marginTop:"-40px",color:"black"}}>{props.title}</h5> 
      <div> 
        <a href={props.website} target='blank'><button className=" text-black px-4 m-5 py-1 h-30 rounded-md  border border-black  hover:bg-black hover:text-white ">{props.buttontitle}</button></a> 

        </div>
  
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Basic" {...a11yProps(0)} />
          <Tab label="Advance" {...a11yProps(1)} />
          <Tab label="Updated" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} style={{color:"black"}}>
       <CheckIcon/> {props.item1}<br/>
       <CheckIcon/>{props.item2}<br/>
        <CheckIcon/>{props.item3}<br/>
        <CheckIcon/>{props.item4}<br/>
        <CheckIcon/>{props.item5}<br/>
        <CheckIcon/>{props.item6}<br/>
        <CheckIcon/>{props.item7}<br/>
        <CheckIcon/>{props.item8}<br/>
        <CheckIcon/>{props.item9}<br/>
        <CheckIcon/>{props.item10}<br/>
        <CheckIcon/>{props.item11}<br/>
      </TabPanel>
      <TabPanel value={value} index={1} style={{color:"black"}}>
        <CheckIcon/>{props.item12}<br/>
        <CheckIcon/>{props.item13}<br/>
        <CheckIcon/>{props.item14}<br/>
        <CheckIcon/>{props.item15}<br/>
        <CheckIcon/>{props.item16}<br/>
        <CheckIcon/>{props.item17}<br/>
        <CheckIcon/>{props.item18}<br/>
        <CheckIcon/>{props.item19}<br/>
        <CheckIcon/>{props.item20}<br/>
        <CheckIcon/>{props.item21}<br/>
        <CheckIcon/>{props.item22}<br/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Coming Soon...
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
        <CircularProgress />
       
        </div>
      </TabPanel>
    </Box>
    </>
  );
}