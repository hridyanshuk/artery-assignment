import "./Footer.css"

export default () => {
    return (
        <div className="footer">
            <div className="footer_item">
                <img src="./calendar.png" />
                <div className="selected">
                    Ongoing
                </div>
            </div>
            <div className="footer_item">
                <img src="./add_circle.png" />
                <div className="unselected">
                    Create
                </div>
            </div>
            <div className="footer_item">
                <img src="event_available.png" />
                <div className="unselected">
                    Existing
                </div>
            </div>
        </div>
    ) 
 }