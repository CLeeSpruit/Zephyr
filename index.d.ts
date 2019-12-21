export function Listen(element: HTMLElement, type: string, callback: Function, options?: boolean | AddEventListenerOptions): void;

export class EventRegistry {
    sendEvent(eventName: string, data: any): void;
    listen(eventName: string, callback: Function): Stream;
}

export class Stream {
    listen(callback: Function): void;
    send(value?: any): void;
}