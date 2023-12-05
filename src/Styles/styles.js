import theme from "./theme";

// Window styles
const windowStyles = {
  window: {
    backgroundColor: theme.palette.background.default,
    display:"flex",
    flexDirection:"column",
    gap:2
  },
};

// Navbar styles
const navbarStyles = {
  navbar: {
    backgroundColor: theme.palette.background.default,
  },
  navbarBrand: {
    mr: 2,
    fontSize: "30px",
    fontWeight: 700,
    textAlign: "left",
    textDecoration: 'none',
    color: theme.palette.text.contrast,
    display: { md: 'flex', xs: 'none' },
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      display: { xs: 'flex', md: 'none' },
      flexGrow: 1,
    },
  },
  navItems: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  brandDivider: {
    backgroundColor: theme.palette.text.white,
    height: "39px",
    borderRightWidth: 1,
    display: { xs: 'none', md: 'block' },
  },
  navOptions: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    fontSize: "21.51px",
    gap: "1rem",
    ml: 2,
  },
  loginButton: {
    width: "175px",
    height: "36px",
    padding: "5px 40px 5px 40px",
    borderRadius: "200px",
    fontFamily: "Open Sans",
    fontSize: "15px",
    backgroundColor:theme.palette.background.contrast,
    color:theme.palette.text.black,
    fontWeight: 600,
    textTransform: 'capitalize',
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      width: '91px',
      height:"auto",
      padding: '2px 10px 10px 10px',
    },
    '&:hover': {
        cursor:"pointer",
        backgroundColor:theme.palette.background.contrast,
    },
  },
  navbarDropdown: {
    color: "white",
    backgroundColor:theme.palette.background.default,
    display: { xs: 'flex', md: 'none' },

    "&:hover": {
        backgroundColor: theme.palette.background.sub
      }
  },
};

const chatContainerStyles = {
        main:{
                height: "80vh",
                backgroundColor: theme.palette.background.main,
                borderRadius: "10px",
                color: theme.palette.text.white,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                box1: {
                        padding: "20px",
                      },
        },
        usersList:{
                usersListDivider: {
                backgroundColor: theme.palette.background.sub,
                borderWidth: 1,
                display: { xs: 'none', md: 'block' },
                },
                userCard:{
                        height:"55px",
                        borderRadius:"150px",
                        background:"inherit",
                        p:"5px",
                        '&:hover': {
                                cursor:"pointer",
                                backgroundColor:theme.palette.background.sub,
                            },
                },
                userCardContent:{
                        color:theme.palette.text.white,
                        fontSize:"16px",
                        padding:0,
                        '&:last-child':{
                                padding:0
                        }
                },
                chatOnButton:{
                        textTransform:"capitalize",
                        width:"100%",
                        borderRadius:"10px", 
                        backgroundColor:theme.palette.background.contrast,
                        color:theme.palette.text.black,
                        padding:"5px" ,
                        '&:hover': {
                                cursor:"pointer",
                                backgroundColor:theme.palette.background.contrast,
                            },
                        },
                        userListBox:{
                        display:"flex", 
                        flexDirection:"column", 
                        gap:2
                        },
                        createNewBotButton:{
                                textTransform:"capitalize",
                                borderRadius:"10px", 
                                padding:"5px",
                                justifyContent: "flex-start",
                                color:theme.palette.text.white,
                        },
                        createNewBotIcon:{
                                fontSize:50,
                                color:theme.palette.text.contrast
                        }
        },
        chatWindow:{
                default:{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        height:"50vh",
                        color:theme.palette.text.grey
                },
                main:{
                        display: 'grid',  
                        gridAutoRows: "1fr",  
                        gap: 1
                },
                chatInput:{    
                        gridColumn: '1', 
                        gridRow: '13/14',
                        padding:0,
                        display:"flex",
                        background:"inherit",
                        flexDirection:"row",
                        gap:"1rem",
                        margin:"0px 0px 0px 0px",
                        mx:"5px"
                },
                chatDialogs:{
                        color:"black",
                        padding:"10px"
                },
                chatTextField:{
                        backgroundColor:theme.palette.background.sub,
                        px:"5px",
                        border:"none",
                        borderRadius:"70px",
                        height:"auto",
                        "& fieldset": { border: 'none' },
                        input:{color:theme.palette.text.white}
                },
                chatDisplay:{
                        gridColumn: '1',
                        gridRow: 'span 12' ,
                        p:0,
                        backgroundColor:theme.palette.background.main,
                        color:theme.palette.text.white
                },
                chatHeader:{
                        height:"20px",
                        backgroundColor:theme.palette.background.sub,
                        fontSize:"12px",
                        display:"flex",
                        justifyContent:"space-between"
                },
                chatSendButton:{
                        backgroundColor:theme.palette.background.contrast,
                        borderRadius:"20px",
                        '&:hover': {
                                cursor:"pointer",
                                backgroundColor:theme.palette.background.contrast,
                            },
                },
                chatSendIcon:{
                        color: theme.palette.text.black,
                },
                chatType:{
                        all:{
                        },
                        send:{
                                ml:"50%",
                                backgroundColor:theme.palette.background.contrast,
                                borderRadius:"15px 15px 0px 15px",
                                padding:"10px",
                                color:theme.palette.text.black,
                        },
                        recive:{
                                mr:"50%",
                                backgroundColor:theme.palette.background.sub,
                                padding:"10px",
                                borderRadius:"15px 15px 15px 0px",
                                color:theme.palette.text.white,
                        }
                }
        }
  }
  const bottomBarStyles = {
        default:{
                display:"flex",
                justifyContent:"space-between",
                backgroundColor:theme.palette.background.default,
                color:theme.palette.text.white,
                alignItems:"center"
        },
        socialIcons:{
                display:"flex",
        },
        socials:{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
                        display: { xs: 'flex', md: 'none' },
                        flexDirection:"col",
                        fontSize:"10px"
                },
        },
        bottomBarBrand:{
                mr: 2,
                fontSize: "20px",
                fontWeight: 700,
                textAlign: "left",
                textDecoration: 'none',
                color: theme.palette.text.contrast,
                display: { md: 'flex', xs: 'none' },
                [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                },
        },
        bottomBarDropdown: {
                color: "black",
                display: { xs: 'block', md: 'none' },
              },
  }

export { windowStyles, navbarStyles, chatContainerStyles, bottomBarStyles };