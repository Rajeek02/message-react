import React from 'react';
import ReactDOM from 'react-dom/client';


import img1 from "./assets/images/i1.jpg"
import img2 from "./assets/images/i2.jpg"
import img3 from "./assets/images/i3.jpg"
import img4 from "./assets/images/i4.jpg"
import img5 from "./assets/images/i5.jpg"
import img6 from "./assets/images/i6.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Search() {
    return (

        <div style={{ backgroundColor: "#DEDEDE", width: "500px", fontFamily: "'Poppins'",padding:"10px",position:"relative"}}>
            <input type='text' placeholder='Search...' style={{ width: "480px", height: "30px", borderRadius: "5px", outline: "none",border: "solid 1px black,", padding: "5px", margin: "7px" }}>
            </input>
            <i class="fa-solid fa-magnifying-glass" style={{ position: "absolute", right:"22px",top:"27px"}}></i>

        </div>


    )
}

function NameOne(props){
    return(
        <div style={{ backgroundColor: "#DEDEDE", width: "500px", fontFamily: "'Poppins', sans-serif",padding:"10px"}}>
        <div style={{backgroundColor:"white",borderRadius:"3px",height:"50px",padding:"10px",margin:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <img src={props.image} alt={props.myname} style={{width:"50px",height:"50px",borderRadius:"50px"}}></img>
        <div style={{width:"350px"}}>
            <h3 style={{margin:"0px"}}>{props.myname}</h3>
            <p style={{margin:"0px",fontSize:"14px",color:"#808894"}}>{props.message}</p>
        </div>
        <div>
            <h4 style={{margin:"0px"}}>{props.mytime}</h4>
            <p style={{margin:"0px",textAlign:"center",color:"green"}}>★</p>
        </div>
        </div>
        </div>

    )
}
var person = [
    {
        img: img1,
        name:"Emerson",
        msg:"Hey, are we still on for the meeting tomorrow?",
        time:"11:30"
        
    },
    {
        img: img2,
        name:"Elizabeth",
        msg:"I'll send you the files in a few minutes.",
        time:"12:30"
        
    },
    {
        img: img3,
        name:"Vindiesel",
        msg:"Can you remind me of the deadline for the project?",
        time:"1:30"
       
    },
    {
        img: img4,
        name:"Victoria",
        msg:"That restaurant you recommended was amazing!",
        time:"2:30"
    },
    {
        img: img5,
        name:"Alex",
        msg:"I just got back from vacation, let’s catch up soon!",
        time:"3:30"
        
    },
    {
        img: img6,
        name:"Alexandria",
        msg:"Don't forget about the team lunch on Friday.",
        time:"4:30"
        
    }
    
]

root.render(
    <div style={{ marginLeft:"500px",width:"520px",bacdisplay: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "50px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Search></Search>
        {
          person.map(function(item,index){
            return <NameOne key={index} image={item.img} myname={item.name} message={item.msg} mytime={item.time}></NameOne>
          })
        }
    </div>
    

)