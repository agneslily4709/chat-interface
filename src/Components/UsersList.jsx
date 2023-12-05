import React from 'react';
import { chatContainerStyles } from '../Styles/styles';
import {
  Box,
  Button,
  Card,
  Avatar,
  Typography,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import { sampleData } from '../Data/data';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getImagePath } from '../Utils/Utils';

const UsersList = ({ setChatDetails }) => {
  const handleUserChange = (idx) => {
    setChatDetails(sampleData[idx]);
  };

  return (
    <Box sx={{ ...chatContainerStyles.main, ...chatContainerStyles.main.box1 }}>
      <Typography>ALL YOUR CHATS</Typography>
      <Button
        sx={chatContainerStyles.usersList.chatOnButton}
        variant="contained"
        startIcon={
          <Avatar
            src={getImagePath('Icons/icons 4.png')}
            sx={{ width: '31.3px', p: 1, height: '32px' }}
          />
        }
      >
        Chat Images: ON
      </Button>
      <Typography>
        When a bot sends you images, you will be charged one secondary image
      </Typography>
      <Box sx={chatContainerStyles.usersList.userListBox}>
        {sampleData.map((user, idx) => (
          <Card
            sx={chatContainerStyles.usersList.userCard}
            key={idx}
            onClick={() => handleUserChange(idx)}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1rem',
              }}
              component="div"
            >
              <CardMedia
                component="img"
                sx={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                }}
                image={getImagePath(user.avatar)}
                alt={`${user.name} Avatar`}
              />
              <CardContent sx={chatContainerStyles.usersList.userCardContent}>
                <Typography>{user.name}</Typography>
                <Typography sx={{ fontSize: '10px' }}>{user.description}</Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
      <Divider
        orientation="horizontal"
        sx={chatContainerStyles.usersList.usersListDivider}
      ></Divider>
      <Button
        sx={chatContainerStyles.usersList.createNewBotButton}
        variant="text"
        startIcon={<AddCircleIcon sx={chatContainerStyles.usersList.createNewBotIcon} />}
      >
        Create new bot
      </Button>
    </Box>
  );
};

export default UsersList;
