import { useParams } from "react-router-dom"
import "./main.css"

const {
   date,
   time
} = {
   date: "Fri, 24th Jan’22",
   time: "19:00"
}


function FinalCount({
   type,
   num
}) {
   return (
      <div className="finalCount">
         <div className="finalCount_left">
            {type}
         </div>
         <div className="finalCount_right">
            {num}
         </div>
      </div>
   )
}

function Count({
   type,
   imgURL,
   num
}) {
   return (
      <div className="count">
         <div className="count_left">
            <img src={imgURL} />
            <div className="count_type">
               {type}
            </div>
         </div>
         
         <div className="count_right">
            {num}
         </div>

      </div>
   )
}


function TypeValueCard({
   type,
   value
}) {
   return (
      <div className="typevaluel">
         {type}: 
         <div>
            {value}
         </div>
      </div>

   )
}

export default () => {
   const {id} = useParams()
      return (
         <div className="content">
            <div className="content_header">
               <div className="content_header_top">
                  <div className="content_header_t1">
                     <div>
                        {date}
                     </div>
                     <div>
                        STARTED: {time}
                     </div>
                  </div>
                  <div className="content_header_t2">
                     <div>
                        Event Header
                     </div>
                     <div>
                        H: 5
                     </div>
                  </div>
               </div>
               <div className="content_header_bottom">
                  <button className="content_nav sel">
                     Statistics
                  </button>
                  <button className="content_nav">
                     Event Details
                  </button>
                  <button className="content_nav">
                     Host Details
                  </button>
               </div>
            </div>


            <FinalCount
            type={"Final Count"}
            num={500} />

            <Count
            num={500}
            type={"Live Count"}
            imgURL={"./liveCount.png"} />
            <Count
            num={-500}
            type={"Negative List"}
            imgURL={"./negativeList.png"} />
            <Count
            num={500}
            type={"Manual Count (Total)"}
            imgURL={"./manualCount.png"} />

            <button className="report">View Report</button>
            <TypeValueCard
            type={"MINIMUM COMMITMENT"}
            value={500} />
            <TypeValueCard
            type={"ESTIMATED TURNOUT"}
            value={500} />


            <div className="notes">
               Add Notes
            </div>
            <button className="endnow">
               End Now
            </button>
         </div>
      ) 
 }