import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useStyles } from './TabVertical.style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className='vertical-tab-content'
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    
  };
}

export default function VerticalTabs({ tabs, content }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',  }}
      className={classes.parentVerticalTab}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {tabs && tabs.map((db, index) => (
          <Tab label={`${db.title}`} {...a11yProps(db.id)} />
        ))}
        {/* <Tab label="Item Two" {...a11yProps(1)} /> */}
      </Tabs>

      {content && content.map((db, index) => (
        <TabPanel value={value} index={db.id}>
          {db.title && <h3 className='mb-[10px]'>{db.title}</h3>}
          {db.detail && db.detail.map((text)=> (
            <p>{text}</p>
          ))}
        </TabPanel>
      ))}
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
     */}
    </Box>
  );
}
