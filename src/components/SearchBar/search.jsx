import React,{Component} from 'react'
import { Button } from 'react-bootstrap'

// import {AiOutlineSearch} from 'react-icons/ai'

class searchBar extends Component {
    render(){
    return(
        <>
        <div>
        <label for="location">Location <br/> Where are you going?</label>
        <input type="button" id="location" name="location">Go Anywhere/Anytime <br/><Button>Fully Flexible</Button></input>
       </div>
        </>
    )
}
}
export default searchBar
