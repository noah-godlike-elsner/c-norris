import React, { useState, useEffect } from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';


const Categories = (props) => {
    const [hasError, setErrors] = useState(false);
    const [Categories, setCategories] = useState([]);
    const [Selected, setSelected] = useState("");
  
  
  
  
  
    async function fetchData() {
      const res = await fetch("https://api.chucknorris.io/jokes/categories");
      res
        .json()
        .then(res => setCategories(res))
        .catch(err => setErrors(err));
    }
    
    

    useEffect(() => {
      fetchData();
    }, []);
  


    return (
      <div>
        
        

        <NativeSelect
            value={Selected}
            onChange={(e)=>{
                setSelected(e.target.value)
                props.setCategory(e.target.value)
            }}
            name="Category"
            inputProps={{ 'aria-label': 'Category' }}
            
          >
              <option value="">Random</option>
              {
              Categories.map((value)=>{
                return <option value= {value}>{value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' Jokes'}</option>
              })
          }
        

          </NativeSelect>
          <FormHelperText>Genre of joke </FormHelperText>
  
  
        
      </div>
    );
  };
  export default Categories;
  