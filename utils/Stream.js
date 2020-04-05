import { SERVER_URL } from '../settings'

class Stream {
    constructor(path) {
        this.source = new EventSource(`${SERVER_URL}/${path}/stream`)
    }

    set onmessage (cb) {
        this.source.onmessage = e => {
            const data = JSON.parse(e.data)
            cb(data)
        }
    }
}

export default Stream
