import { EventTypes } from './event-types';
/**
 * Adds a listener to the HTMLElement provided
 *
 * @export 
 * @param {HTMLElement} element - An HTML element that this event is bound to
 * @param {string} type - HTML-compliant event type as a string
 * @param {Function} callback - Function to be called once the event has fired
 * @param {(boolean | AddEventListenerOptions)} [options] - Options provided to the event listener
 */
export function Listen(element, type, callback, options) {
    switch (type) {
        case EventTypes.enter:
            return addEventListener(element, EventTypes.keypress, (event) => event.key === 'Enter', callback, options);
        /*
            @todo merge scroll and wheel events
            @body Wheel event only affects the mouse wheel, rather than a scroll bar, however the wheel has the delta property which tells which way to go
        */
        case EventTypes.scrollDown:
            return addEventListener(element, EventTypes.wheel, (event) => event.deltaY > 0, callback, options);
        case EventTypes.scrollUp:
            return addEventListener(element, EventTypes.wheel, (event) => event.deltaY < 0, callback, options);
        default:
            return addEventListener(element, type, () => true, callback, options);
    }
}

/**
 * Wraps the callback if needed and adds the listener to the element
 *
 * @export 
 * @param {HTMLElement} element - An HTML element that this event is bound to
 * @param {string} type - HTML-compliant event type as a string
 * @param {Function} condition - Only fire callback when this function returns true
 * @param {Function} callback - Function to be called once the event has fired
 * @param {(boolean | AddEventListenerOptions)} [options] - Options provided to the event listener
 */
function addEventListener(element, type, condition, callback, options) {
    const wrappedFn = (event) => {
        if(condition(event)) {
            callback(event);
        }
    };
    element.addEventListener(type, wrappedFn, options);
}