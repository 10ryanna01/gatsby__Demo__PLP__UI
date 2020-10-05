import {Box} from '@material-ui/core';
import React from 'react';
// add in custom css here build out card styling here 
import './styles/index.less'

class SortByFields extends React.Component {
  constructor(props) { 
    super();
    

    this.state = { value: 'mostRelevant' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('You selected to sort results by: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div>
 
      <Box display="flex" flexDirection="row-reverse" mb={2}>
    
  
        <label className="SortByFields__label"> 
          sort by: 
          </label> 
          <select value={this.state.value} onChange={this.handleChange} className="SortByFields__select">
            <option value="mostRelevant">sort by: most relevant</option>
            <option value="mostPopular">sort by: most popular</option>
            <option value="prieHighest">sort by: price (hightest)</option>
            <option value="priceLowest">sort by: price (lowest)</option>
          </select>  
      </Box> 
     
      </div>

    )
  }
}


export default SortByFields
