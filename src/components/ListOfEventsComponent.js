import React,{useState} from 'react'

const ListOfEventsComponent = () => {

    const [events, setEvents] = useState([])
    
    return ( 
        <div className="container">
            <h2 className="text-center">Events</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Event Name</th>
                    <th>Event Capacity</th>
                    <th>Event Start Date</th>
                    <th>Event End Date</th>
                </thead>
                <tbody>
                    {
                        events.map(
                            event =>
                            <tr key={event.eventName}>
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