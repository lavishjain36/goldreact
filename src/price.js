import React from 'react'
import { useState} from "react";
import { Grid, Paper , Typography, TextField ,Box , Button,FormControl,MenuItem,Select,InputLabel} from '@material-ui/core'



export default function Price() {

    const paperStyle={padding:"20px 30px" ,height:"60vh",width:280,margin:"20px auto"}
    const headerStyle={margin:4}

    const [price,setPrice] = useState([])

    const handleChange = (event) => {
        setPrice(event.target.value);
      };

    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <h2 style={headerStyle}>Gold Calculator</h2>
            <Typography variant="caption">Find the gold rate by enter below data </Typography>
            <Box sx={{ m: 2 }} />
            </Grid>
          <FormControl variant="outlined" style={{width:"100%"}}>
            <InputLabel id="demo-simple-select-outlined-label">Select Currency</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={price}
              onChange={handleChange}
              label="Select Currency"
            >
              <MenuItem value={10}>INR</MenuItem>
              <MenuItem value={20}>USD</MenuItem>
              <MenuItem value={30}>EUR</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ m: 2 }} />
          <TextField
            id="outlined-number"
            label="Enter Amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <Box sx={{ m: 2 }} />
          <Button variant="contained" color="primary" style={{margin:"0 auto"}}>
            Calculate
          </Button>
        </Paper>
        </Grid>
    )
}

