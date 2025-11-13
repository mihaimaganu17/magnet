'use client';

import { useEffect } from 'react';

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
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center">
          <h2 className="text-center">Something went wrong!</h2>
          <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            onClick={
              // Attempt to recover by trying to re-render the invoices route
              () => reset()
            }
          >
            Try again
          </button>
        </main>
    );    
}

