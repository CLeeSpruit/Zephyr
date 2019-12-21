import {Stream} from './stream';

export class EventRegistry {
	constructor() {
		this.registry = new Map();
	}

	/**
     * Sends an event through the application
     *
     * @param {string} eventName - Must match the event listner event name
     * @param {*} [data] - Data to be sent to the listener callback
     * @memberof EventRegistry
     */
	sendEvent(eventName, data) {
		// Get event from registry
		const reg = this.registry.get(eventName);

		// Set event in registry if doesn't exist
		if (reg) {
			reg.send(data);
		}
	}

	/**
     * Fetches or creates a stream, starts listening, and returns the stream created/found
     *
     * @param {string} eventName - Must match the event listner event name
     * @param {Function} callback - Callback when event is triggered
     * @memberof EventRegistry
	 * @returns {Stream}
     */
	listen(eventName, callback) {
		// Get event from registry
		const reg = this.registry.get(eventName);

		// Set event in registry if doesn't exist
		if (reg) {
			reg.listen(callback);
			return reg;
		} else {
			const stream = new Stream();
			stream.listen(callback);
			this.registry.set(eventName, stream);
			return stream;
		}
	}
}
