import { lusitana_400 } from "@/app/ui/fonts";
import { fetchRevenue } from "@/app/lib/data";

export default async function Page() {
    const revenue = await fetchRevenue();

  return ( 
    <main>
      {/* mb is `margin below` */}
      <h1 className={`${lusitana_400.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
      </h1>
      {/* `gap` controls the gutters/spaces between the rows (gap-y-) and columns (gap-x)
          of the grid.
      */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          
      </div>
    </main>
  );
}