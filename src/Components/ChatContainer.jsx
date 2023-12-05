import React, { useState } from 'react';
import { Grid, Container, useMediaQuery } from "@mui/material";
import UsersList from './UsersList';
import ChatWindow from './ChatWindow';

const ChatContainer = () => {
  const isXSScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [chatDetails, setChatDetails] = useState(null);

  return (
    <>
      <Container>
        {isXSScreen ? (
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12}>
              {chatDetails ? (
                <ChatWindow chatDetails={chatDetails} setChatDetails={setChatDetails}  />
              ) : (
                <UsersList setChatDetails={setChatDetails} />
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={4}>
              <UsersList setChatDetails={setChatDetails} />
            </Grid>
            <Grid item xs={8}>
                <ChatWindow chatDetails={chatDetails}setChatDetails={setChatDetails}  />
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
}

export default ChatContainer;