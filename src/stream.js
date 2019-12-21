export class Stream {
	constructor() {
		this.listeners = [];
	}

	/**
     * Listen to the stream and execute the callback when new values come down the pipe
     *
     * @param {Function} callback - Fn to be executed when data is sent down the stream
     * @memberof Stream
     */
	listen(callback) {
		// Register to listeners
		this.listeners.push(callback);
	}

	/**
     * Sends a new value to all listener of this stream
     *
     * @param {*} value
     * @memberof Stream
     */
	send(value) {
		// Send new value to all listeners
		this.listeners.forEach(listener => listener(value));
	}
}
