import test from 'ava';
import {listen} from '../listen';
import {EventTypes} from '../event-types';

test('should listen to element event: generic', t => {
	const el = document.createElement('button');
	listen(el, EventTypes.click, () => t.pass());
	el.click();
});

// Enter
test('should listen to element event: enter', t => {
	const el = document.createElement('input');
	listen(el, EventTypes.enter, () => t.pass());
	el.dispatchEvent(new window.KeyboardEvent('keypress', {key: 'Enter'}));
});

test('should listen to element event: enter - should not trigger on other keypress', t => {
	const el = document.createElement('input');
	listen(el, EventTypes.enter, () => t.fail());
	el.dispatchEvent(new window.KeyboardEvent('keypress', {key: 'Shift'}));
	t.pass();
});

// Scroll Up
test('should listen to element event: scroll down', t => {
	const el = document.createElement('div');
	listen(el, EventTypes.scrollDown, () => t.pass());
	el.dispatchEvent(new window.WheelEvent('wheel', {deltaY: 100}));
});

test('should listen to element event: scroll down - should not trigger on scroll up', t => {
	const el = document.createElement('div');
	listen(el, EventTypes.scrollDown, () => t.fail());
	el.dispatchEvent(new window.WheelEvent('wheel', {deltaY: -100}));
	t.pass();
});

// Scroll Down
test('should listen to element event: scroll up', t => {
	const el = document.createElement('div');
	listen(el, EventTypes.scrollUp, () => t.pass());
	el.dispatchEvent(new window.WheelEvent('wheel', {deltaY: -100}));
});

test('should listen to element event: scroll up - should not trigger on scroll down', t => {
	const el = document.createElement('div');
	listen(el, EventTypes.scrollUp, () => t.fail());
	el.dispatchEvent(new window.WheelEvent('wheel', {deltaY: 100}));
	t.pass();
});
