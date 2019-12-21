import {EventTypes} from './event-types';
/**
 * Adds a listener to the HTMLElement provided
 *
 * @export
 * @param {HTMLElement} element - An HTML element that this event is bound to
 * @param {string} type - HTML-compliant event type as a string
 * @param {Function} callback - Function to be called once the event has fired
 * @param {(boolean | AddEventListenerOptions)} [options] - Options provided to the event listener
 */
export function listen(element, type, callback, options) {
	/*
        @todo merge scroll and wheel events
        @body Wheel event only affects the mouse wheel, rather than a scroll bar, however the wheel has the delta property which tells which way to go
    */
	let wrappedFn;
	let newType;
	switch (type) {
		case EventTypes.enter:
			newType = EventTypes.keypress;
			wrappedFn = wrap(event => event.key === 'Enter', callback);
			break;
		case EventTypes.scrollDown:
			newType = EventTypes.wheel;
			wrappedFn = wrap(event => event.deltaY > 0, callback);
			break;
		case EventTypes.scrollUp:
			newType = EventTypes.wheel;
			wrappedFn = wrap(event => event.deltaY < 0, callback);
			break;
		default:
			newType = type;
			wrappedFn = wrap(() => true, callback);
			break;
	}

	element.addEventListener(newType, wrappedFn, options);
}

/**
 * Wraps the callback if needed and adds the listener to the element
 *
 * @export
 * @param {Function} condition - Only fire callback when this function returns true
 * @param {Function} callback - Function to be called once the event has fired
 * @returns {Function}
 */
function wrap(condition, callback) {
	return event => {
		if (condition(event)) {
			callback(event);
		}
	};
}
