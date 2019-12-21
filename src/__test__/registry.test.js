import test from 'ava';
import { EventRegistry } from '../registry';

test('should init', t => {
    const registry = new EventRegistry();
    t.assert(registry);
});

test('should create a listener and call fn when triggered', t => {
    const registry = new EventRegistry();
    registry.listen('test', () => t.pass());
    registry.sendEvent('test');
});

test('should be able to create multiple listeners and call the correct one', t => {
    const registry = new EventRegistry();
    registry.listen('test:pass', () => t.pass());
    registry.listen('test:fail', () => t.fail());
    registry.sendEvent('test:pass');
});

test('should be able to create multiple listeners to the same event', t => {
    const registry = new EventRegistry();
    registry.listen('test', () => t.pass());
    registry.listen('test', () => t.pass());
    registry.sendEvent('test');
});

test('should handle it if the event is not found', t => {
    const registry = new EventRegistry();
    registry.sendEvent('test');
    t.pass();
});