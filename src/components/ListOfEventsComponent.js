import React,{useState, useEffect} from 'react'
import EventService from '../services/EventService';

const ListOfEventsComponent = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        EventService.getAllEvents().then((response) => {
            setEvents(response.data.data)
            console.log(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    
    return ( 
        <div className="container">
            <h2 className="text-center">Events</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Event Capacity</th>
                        <th>Event Start Date</th>
                        <th>Event End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map(
                            event =>
                            <tr key={event.eventId}>
                                <td>Event Name</td>
                                <td> {event.eventCapacity} </td>
                                <td> {event.eventStartDate} </td>
                                <td> {event.eventEndDate} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListOfEventsComponent