import React from 'react'
import {Grid, Container} from "@mui/material"

const ChatContainer = () => {

  return (
    <>
        <Container>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }} sx={{py:2}}>
                Chat Container
        <Grid item xs={4}>
                {/* UsersList */}
        </Grid>
        <Grid item xs={8}>
                {/* ChatWindow */}
        </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default ChatContainer