import { Stream } from './stream';

export class EventRegistry {
    /**
     * Map of event listeners, based off of event name
     *
     * @memberof EventRegistry
     */
    registry = new Map();

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
     * Creates a listener
     *
     * @param {string} eventName - Must match the event listner event name
     * @param {Function} callback - Callback when event is triggered
     * @memberof EventRegistry
     */
    listen(eventName, callback) {
        // Get event from registry
        const reg = this.registry.get(eventName);

        // Set event in registry if doesn't exist
        if (!reg) {
            const stream = new Stream();
            stream.listen(callback);
            this.registry.set(eventName, stream);
        } else {
            reg.listen(callback);
        }
    }
}