import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.addListener('foobar', (foo: number) => {
  // do something
});

emitter.addListener('foobar', (bar: string) => {
  // do something
});
