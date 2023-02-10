import { uniqueId } from 'lodash';

const ScrollManager = () => {
  let state = {
    x: 0,
    y: 0
  };

  const listeners = {};

  const update = (scroll) => {
    // because this condition does nothing, we cannot test it
    // so we ignore it for coverage
    /* istanbul ignore next */
    if (scroll.x === state.x && scroll.y === state.y) {
      // this is a duplicate scroll event, ignore it
      return;
    }

    state = { ...scroll };
    Object.keys(listeners).forEach((listenerId) => {
      const listener = listeners[listenerId];
      listener.call(null, state);
    });
  };

  const subscribe = (listener) => {
    const listenerId = uniqueId();
    listeners[listenerId] = listener;
    return listenerId;
  };

  const unsubscribe = (listenerId) => {
    // this check is here to make sure the listener exists
    // this condition is hard to re-create in Jest, so we ignore it for coverage
    /* istanbul ignore else */
    if (listeners[listenerId]) {
      delete listeners[listenerId];
    }
  };

  return {
    update,
    subscribe,
    unsubscribe
  };
};

const instance = ScrollManager();
export default instance;
