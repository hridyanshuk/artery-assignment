import { Avatar } from "@mui/material"
import "./Header.css"


function Greeting({name}) {
    return (
        <div className="greeting">
            Hi, {name}
        </div>
    )
}

function VenueName({venue_name}) {
    return (
        <div className="venuename">
            {venue_name}
        </div>
    )
}

export default ({
    name,

}) => {
   return (
    <div className="header">
        <div className="header_left">
            <Greeting name={name} />
            <VenueName venue_name={"VENUE NAME"} />
        </div>
        <div className="header_right">
            <div className="avatar">
                <img src="./Avatar.png" />
            </div>
        </div>
            
    </div>
   ) 
}