const RenderQueue = () => {
  let readQueue = [];
  let writeQueue = [];

  let triggered = null;

  const executeQueue = (queue) => {
    const seenTypes = {};

    for (let i = queue.length - 1; i >= 0; i--) {
      const op = queue[i];

      // this condition is hard to re-create in Jest, so we ignore it for coverage
      /* istanbul ignore if */
      if (seenTypes[op.type]) {
        // this is an operation type that should only be executed once and
        // a later operation has already executed it
        // (we are iterating in reverse, so later operations (pushed to the end) will
        // come up first)
        // eslint-disable-next-line no-continue
        continue;
      } else {
        seenTypes[op.type] = op.type;
      }

      op.operation.call();
    }
  };

  const render = () => {
    executeQueue(readQueue);
    executeQueue(writeQueue);

    readQueue = [];
    writeQueue = [];

    triggered = null;
  };

  const add = (op, type) => {
    if (type === 'read') {
      readQueue.push(op);
    } else {
      writeQueue.push(op);
    }

    if (!triggered) {
      // we have operations now, so render through the queue on the next frame
      triggered = window.requestAnimationFrame(render);
    }
  };

  return {
    addRead: (op) => {
      add(op, 'read');
    },
    addWrite: (op) => {
      add(op, 'write');
    }
  };
};

const instance = RenderQueue();

export default instance;
