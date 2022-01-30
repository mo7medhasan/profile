import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';


import Avatar from '@mui/material/Avatar';

export default function BasicCard({card}) {

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#ff9301' }} aria-label="recipe">
            {card.icon}
           
          </Avatar>
        }


      />
      <CardHeader title={card.name} />
      <CardContent>
        {card.text}
      

      </CardContent>

    </Card>
  );
}
