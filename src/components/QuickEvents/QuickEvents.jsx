import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import "./QuickEvents.css"
import { FaCalendarAlt } from "react-icons/fa";
import { format } from 'date-fns';

const QuickEvents = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCommunityEvent {
                edges {
                    node {
                        id
                        title
                        description
                        date
                    }
                }
            }
        }
    `);

    const events = data.allContentfulCommunityEvent.edges;

    return (
        <div className="quickEvents">
            <h1><u>Upcoming Events</u></h1>
            <h3>These events are not real. They are currently only examples.</h3>
            <ul>
                {events.map(({ node: event }) => {
                    const readableDate = format(new Date(event.date), 'MM/dd/yyyy');
                    return (
                        <li className="list" key={event.id}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <div className="date">
                                <FaCalendarAlt/>
                                <p>{readableDate}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default QuickEvents;
