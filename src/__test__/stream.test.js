import test from 'ava';
import {Stream} from '../stream';

test('should init', t => {
	const stream = new Stream();
	t.assert(stream);
});

test('should listen and send data', t => {
	const stream = new Stream();
	const data = 'hello';
	stream.listen(streamValue => {
		t.assert(streamValue === data);
	});
	stream.send(data);
});
