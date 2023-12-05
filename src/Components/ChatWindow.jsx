import React from 'react'
import {chatContainerStyles} from '../Styles/styles'
import {Grid, TextField, List,ListItem, ListItemText, Box, Toolbar, Button, IconButton, Typography, Paper, Avatar} from "@mui/material"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import TelegramIcon from '@mui/icons-material/Telegram';
import DeleteIcon from '@mui/icons-material/Delete';


const ChatWindow = ({chatDetails,setChatDetails}) => {
        const getImagePath = (avatar) => {
                return require(`../Imgs/${avatar}`);
        }
  return (
        <Box sx={{...chatContainerStyles.main}}>
<Box sx={chatContainerStyles.chatWindow.main}>
  <Paper sx={chatContainerStyles.chatWindow.chatDisplay}>
                {chatDetails ?
                (
                        <>
                        <Toolbar variant='dense' sx={chatContainerStyles.chatWindow.chatHeader}>
                        <Box sx={{ display: 'flex' ,alignItems:"center",gap:1}}>
                        <IconButton  sx={{ p: 0 }}> <Avatar alt="Remy Sharp" src={getImagePath(chatDetails.avatar)} /> </IconButton>
                        <Typography>{chatDetails.name}</Typography>
                        </Box>
                       <Box  sx={{ display: 'flex'}}>
                       <Button onClick={() =>setChatDetails(null)} color="inherit"  sx={{ textTransform: 'none' }} startIcon={<ArrowCircleLeftIcon/>}>Back</Button>
                        <Button color='inherit' sx={{ textTransform: 'none' }}  startIcon={<DeleteIcon/>}>Delete</Button>
                       </Box>
                </Toolbar>
                <Box display="flex" flexDirection="column" gap={2}>
                        <List>
                        {chatDetails.messages && chatDetails.messages.map((chatDetail,idx) => (
                    <ListItem key={idx}>
                    <Grid container> 
                    {chatDetail.sender === "You" ? 
                    <Grid item xs={12} sx={{display:"flex", gap:1, alignItems:"stretch"}}>
                        <ListItemText align="right" sx={chatContainerStyles.chatWindow.chatType.send}>
                            <Typography fontSize={12}>{chatDetail.message}</Typography>
                        </ListItemText>
                        <IconButton  sx={{ p: 0 }}> <Avatar alt="Remy Sharp" src={getImagePath("Profiles/Ellipse 16.png")} /> </IconButton>
                    </Grid>: 
                    <Grid item xs={12} sx={{display:"flex", gap:1}}>
                        <IconButton  sx={{ p: 0 }}> <Avatar alt="Remy Sharp" src={getImagePath(chatDetails.avatar)} /> </IconButton>
                        <ListItemText align="left" sx={chatContainerStyles.chatWindow.chatType.recive}>
                            <Typography fontSize={12}>{chatDetail.message}</Typography>
                        </ListItemText>
                    </Grid>}
                    </Grid>
                </ListItem>
                        ))}
                        </List>
                </Box>
                        </>
                ):
                <Box sx={chatContainerStyles.chatWindow.default}>
                        <Typography variant='h5' gutterBottom>Select a user and start texting</Typography>
                </Box>
                }
  </Paper>
  <Paper sx={chatContainerStyles.chatWindow.chatInput}>
  <TextField sx={chatContainerStyles.chatWindow.chatTextField} id="outlined-basic-email" placeholder="Message" fullWidth />
  <Button variant='contained' sx={ chatContainerStyles.chatWindow.chatSendButton }><TelegramIcon sx={chatContainerStyles.chatWindow.chatSendIcon}/></Button>
  </Paper>
</Box>
        </Box>
  )
}

export default ChatWindow