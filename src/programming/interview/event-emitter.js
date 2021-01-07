/**
 * 有赞一面
 * 实现一个 event-emitter
 */
class CustomEventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, handler) {
    if (this.events.has(eventName)) {
      const handlers = this.events.get(eventName);
      handlers.push(handler);
      this.events.set(eventName, handlers);
      return;
    }
    this.events.set(eventName, [handler]);
  }

  emit(eventName, ...args) {
    const handlers = this.events.get(eventName);
    if (handlers) {
      for (const handler of handlers) {
        handler.apply(null, args);
      }
    }
  }
}

const event = new CustomEventEmitter();

const handleTestEvent1 = () => console.log("1 on test event!");
const handleTestEvent2 = () => console.log("2 on test event!");

event.on("test", handleTestEvent1); // add listener
event.on("test", handleTestEvent2); // add listener
event.emit("test"); // on test event!
