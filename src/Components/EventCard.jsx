import { Link } from "react-router-dom"
import "./EventCard.css"
export default ({
    eventHeader,
    hostName,
    timeStarted,
    date,
    minCommit,
    liveCount,
    notifCount,
    id
}) => {
    return (
        <div className="event_card">
            <div className="container">
                <div className="event_card_top">
                    <div className="event_card_left">
                        <div className="event_card_left_header">
                            <div className="event_card_left_heading">
                                {eventHeader}
                            </div>
                            <div className="event_card_left_hostname">
                                {hostName}
                            </div>
                        </div>
                        <div className="event_card_left_time">
                            <li>Started: {timeStarted}</li>
                        </div>
                    </div>

                    <div className="event_card_right">
                        <div className="event_card_right_date">
                            {date}
                        </div>
                        <div className="event_card_right_count">
                            <div className="event_card_right_count_item">
                                <div className="event_card_count_box event_card_count_box_commit">
                                    {minCommit}
                                </div>
                                <div className="event_card_count_label">
                                    Min. Commit.
                                </div>
                            </div>
                            <div className="event_card_right_count_item">
                                <div className="event_card_count_box event_card_count_box_live">
                                    {liveCount}
                                </div>
                                <div className="event_card_count_label">
                                    Live Count
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event_card_bottom">
                    <div className="h5">H: 5</div>
                    <div className="notif">
                        <img src="./notifications.png" />
                        {notifCount}
                    </div>
                    
                    <Link to={`${id}`} className="manage_event">
                        Manage Event
                    </Link>
                </div>
            </div>
                
        </div>
    )
}