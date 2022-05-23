import React,{useState,useEffect} from "react";
import logo from './Amazon-logo.jpg';
import './App.css';


function App(){
  const[data,setData]=useState([]);


  useEffect(()=>{
    
    fetch("http://localhost:4025/get")
      .then(res => res.json())
      .then(response => {

      setData(response);
      console.log(response)
       // setText(response.data[0].image);
      }).catch(err => {
        console.log(err.message)
      });
      
  },[])
  
  console.log(data);
  
  return(
<div id="body">
   <div>
       <span><img src={logo} id="logo" alt="amazon"></img></span> 
<input type="text" id="search-box" placeholder="Search" />
<button type="button" id="go-btn">GO</button>
   </div>
   <div id="container">
     {data.map((product)=>{
        return(
        <div id="video">
          <div id="image">
        <img src={product.img} alt=""></img>
        </div>
              <div>
                      
                      <h4 class="link">{product.link}</h4>
                      <a href = {product.link} class="link" >Product link</a><br></br>
                      <span class="content">
                      <b>Name:</b>  {product.name} <br/>
                      <b>Price:</b> {product.price}<br/>
                      <b>Ratingt:</b> {product.Rating}
                      </span>
                  
              </div>
              </div>
     )})}
   
   </div>
   </div>
  );
}

export default App;
