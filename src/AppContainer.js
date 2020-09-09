import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Jokes from './Jokes';
import Categories from './Categories';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:20
    },
}));

function AppContainer() {
    
    const [Category, setCategory] = useState([]);
    const [myText, setMyText] = useState(1);

    const classes = useStyles();

  return (
    <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Categories setCategory = {(category) =>{setCategory(category)}}/>
                    <Jokes category = {Category} />

                </Grid>
            </Grid>
            

            

       
        </div>
    );
  }
  
  export default AppContainer;