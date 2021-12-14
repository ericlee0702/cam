import "./App.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import titleImg from './assets/home/Title.png'
import { Box } from "@material-ui/core";
import { TextField } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <Container max-width="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <Box sx={{display:'flex', justifyContent: 'center'}}>
            <img src={titleImg} className="titleImage"/>
          </Box>
          <Box>
            
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

export default App;
