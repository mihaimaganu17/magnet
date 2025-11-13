export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string};
    reset: () => void;
}) {
    // Effects let you specify side effects that are caused by rendering itself, rathre than by a
    // particular event.
    // Effects run at the end of a commit (comming a change to the DOM) after the screen updates.
    // This is a good time to synchronize the React components with some external system.
}

