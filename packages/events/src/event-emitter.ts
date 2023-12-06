export interface TypedEventEmitter<T extends Record<keyof T, any[]>> {
  addListener: <K extends keyof T>(
    eventName: K,
    listener: (...args: T[K]) => void,
  ) => void;
}

export const createTypedEventEmitter = <
  T extends Record<keyof T, any[]>,
>(): TypedEventEmitter<T> => {
  const addListener: TypedEventEmitter<T>['addListener'] = (
    eventName,
    listener,
  ) => {};

  const emitter: TypedEventEmitter<T> = {
    addListener,
  };

  return Object.freeze(emitter);
};
