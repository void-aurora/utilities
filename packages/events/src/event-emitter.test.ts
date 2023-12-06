import { describe, test, expect } from 'vitest';
import { createTypedEventEmitter } from './event-emitter';

describe('TypedEventEmitter', () => {
  test('members', () => {
    const emitter = createTypedEventEmitter();
    expect(typeof emitter.addListener).toBe('function');
  });
});
