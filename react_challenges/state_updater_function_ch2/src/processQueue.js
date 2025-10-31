export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
  for (i=0; i<queue.length; i++) {
    if (typeof queue[i] === 'number') {
      finalState = queue[i];
    } else {
      finalState = queue[i](finalState);
    }
  }

  return finalState;
}
