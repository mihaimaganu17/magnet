'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  // Obtain the current URL's pathname
  const pathname = usePathname();
  // the `replace` method will replace the current URL of the page with the specified URL
  const { replace } = useRouter();

  // Debouncing reduces the number of requests made to the database, such that we do not perform a
  // server request everytime an event occurs (everytime the user gives a letter to the input).
  // use debouncing callback that starts a timer and it resets the timer whenever a new event occurs
  // before the timer expiring. If the timer expires, the closure (debounced function is executed).
  // In this case the times is 300 ms
  const handleSearch = useDebouncedCallback((term: string) => {
    // Logging to debug debouncing
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    // Always reset to first page when the user searches a new query
    params.set('page', '1');
    // Set the URL parameters according to the user's query
    if (term) {
      params.set('query', term);
    } else {
      // If the user did not enter anything, remove the query
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`)
    console.log(term);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={ (e) => {
            handleSearch(e.target.value);
          }
        }
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
