import EventCard from './Components/EventCard'
import './main.css'



export default () => {
   return (
      <div className="content">

         <EventCard className="inlineB"
         eventHeader={"Event Header"}
         hostName={"Host Name"}
         timeStarted={"19:00"}
         date={"Mon, 24th Jan’22"}
         minCommit={72}
         liveCount={72}
         notifCount={20}
         id={1} />
         
         <EventCard className="inlineB"
         eventHeader={"Event Header"}
         hostName={"Host Name"}
         timeStarted={"19:00"}
         date={"Mon, 24th Jan’22"}
         minCommit={72}
         liveCount={72}
         notifCount={20}
         id={2} />

         <EventCard className="inlineB"
         eventHeader={"Event Header"}
         hostName={"Host Name"}
         timeStarted={"19:00"}
         date={"Mon, 24th Jan’22"}
         minCommit={72}
         liveCount={72}
         notifCount={20}
         id={3} />
      </div>
   ) 
 }