import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SsidChart from '@mui/icons-material/SsidChart';
import Receipt from '@mui/icons-material/Receipt';
import { Card } from '@material-ui/core';

export default function FinanceTabs(props) {

  const children = [
    <ToggleButton value={0} key="left">
      <SsidChart />
    </ToggleButton>,
    <ToggleButton value={1} key="center">
      <Receipt />
    </ToggleButton>,
  ];

  const control = {
    value: props.selectedTab,
    onChange: props.setSelectedTab,
    exclusive: true,
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // TODO Replace with Stack
        '& > :not(style) + :not(style)': { mt: 2 },
      }}
      style={{height: 48, backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', borderRadius: 16, marginTop: 32, marginRight: '50%', transform: 'translateX(+50%)'}}
    >
      <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
    </Card>
  );
}
