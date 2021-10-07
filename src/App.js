import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//dfghjk

 class Employee extends Component {
 constructor(props){
 super(props);
 
 this.state={
 detail : [],
 details:{
 id:'',
 email:'',
 first_name:'',
 last_name:''
 },
 employees:{},
 
 };
 
 }

ondetails = () => {
  fetch('https://reqres.in/api/users?page=2')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      this.setState({ detail: json.data });
    }
    )
}
 
 searchbyid=()=>{
 console.log("id",this.state.details.id)
 fetch(`https://reqres.in/api/users?page=2${this.state.details.id}`)
 .then((response) => response.json())
 .then((json) =>{console.log(json)
 this.state.employees=json
 console.log(this.state.employees.data)
 });
 }
 
 searchby_id=()=>{
 console.log("id",this.state.details.id)
 fetch(`https://reqres.in/api/users/${this.state.details.id}`,
 {
 method: 'DELETE',})
 .then((response) => response.json())
 .then((json) =>{console.log(json)
 this.state.employees=json
 console.log(this.state.employees.data)
 });
 }
 
 
 handlechange=(e)=>{
 var details=this.state.details
 var name=e.target.name
 var value=e.target.value
 details[name]=value
 this.setState({details})
 }
 
 onsubmit=()=>{
 //console.log("details",this.state.details)
 var empdetail={"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth"};
 
 
 fetch(`https://reqres.in/api/users`,
 {
 method: 'POST',
 body: JSON.stringify(empdetail),
 headers: {
 'Content-type': 'application/json; charset=UTF-8',
 },
 }
 )
 .then((response) => response.json())
 .then((json)=>console.log(json));
 
 };
 
 
 
 
 render() {
 return (
 <div align = "center">
 <Button variant="contained"
    onClick={this.ondetails}>getdetails</Button>

 {this.state.detail.length > 0 &&
              this.state.detail.map((record) => {
                return (
                  <tr key={record.id}>
                    <td>{record.id}--</td>
                    <td>{record.first_name}--</td> 
                    <td>{record.last_name}--</td> 
                    <td>{record.email}</td>
                  </tr>

                );
              })}


 <div>
 <TextField id="outlined-basic"
 label="Email"
 variant="outlined" 
 name="email"
 onChange={this.handlechange}
 value={this.state.details.email}/>
 </div>
   <p></p>
 
<div >
 <TextField id="outlined-basic"
 label="First_Name"
 variant="outlined" 
 name="first_name"
 onChange={this.handlechange}
 value={this.state.details.first_name}/>
 </div>
 
   <p></p>
 
 <div>
 <TextField id="outlined-basic" 
 label="Last_Name" 
 variant="outlined"
 name="last_name"
 onChange={this.handlechange}
 value={this.state.details.last_name}/>
 </div>
 <div>
   <p></p>
 </div>
 <div>
 <Button variant="contained"
 onClick={this.onsubmit}>submit</Button>
 </div>
 
   <p></p>
 
 
 <TextField id="outlined-basic" 
 label="id"
 variant="outlined"
 name="id"
 onChange={this.handlechange}
 value={this.state.details.id} /> 
 <div>
   <p></p>
 </div>
 
 <div>
 <Button variant="contained"
 onClick={this.searchbyid}>search</Button>
 
 <div>
   <p></p>
 </div>

 <Button variant="contained"
 onClick={this.searchby_id}>delete</Button>
 
 </div> 
 
 </div>
 )
 };
}
export default Employee;