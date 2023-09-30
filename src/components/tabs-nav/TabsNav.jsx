import c from './tabs-nav.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EpisodesPage from '../episodes-page/EpisodesPage';
import clsx from 'clsx';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ border: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabsNav() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ border: 0 }}>
      <Box sx={{ border: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ border: 0 }}
        >
          <Tab
            label="Episodes"
            classes={{
              root: clsx(c.customTab),
              selected: clsx(c.customTabSelected),
            }}
            sx={{ border: 0 }}
          />
          <Tab
            label="Shows"
            classes={{
              root: clsx(c.customTab),
              selected: clsx(c.customTabSelected),
            }}
          />
          <Tab
            label="Downloads"
            classes={{
              root: clsx(c.customTab),
              selected: clsx(c.customTabSelected),
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        sx={{ border: 0 }}
      >
        <EpisodesPage />
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
        sx={{ border: 0 }}
      >
        <div className={c.otherPage}></div>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}
        sx={{ border: 0 }}
      >
        <div className={c.otherPage}></div>
      </CustomTabPanel>
    </Box>
  );
}

// 'Mui-selected', 'MuiTab-root'
