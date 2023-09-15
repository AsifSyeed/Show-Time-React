/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const EVENT_ALL = 'http://localhost:8080/api/v1/event/all';

class EventService {
    getAllEvents() {
        return axios.get(EVENT_ALL)
    }
}

export default new EventService();