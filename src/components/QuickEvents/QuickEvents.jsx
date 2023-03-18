import React from "react";
import "./QuickEvents.css"
import { FaCalendarAlt } from "react-icons/fa";

const QuickEvents = ({ events }) => {
    return (
        <div className="quickEvents">
            <h1><u>Upcoming Events</u></h1>
            <h3>These events are not real. They are currently only examples.</h3>
            <ul>
                {events.map((event) => (
                    <li className="list" key={event.id}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <div className="date">
                        <FaCalendarAlt/>
                        <p>{event.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuickEvents;
