import { lusitana_400 } from "@/app/ui/fonts";
import { fetchLatestInvoices, fetchCardData } from "@/app/lib/data";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { Card }  from "@/app/ui/dashboard/cards";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page() {
    const invoices = await fetchLatestInvoices();
    const {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    } = await fetchCardData();

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
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Customers" value={numberOfCustomers} type="customers" />
        <Card title="Invoices" value={numberOfInvoices} type="invoices" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton/>}>
            <RevenueChart/>
          </Suspense>
          <LatestInvoices latestInvoices={invoices} />
      </div>
    </main>
  );
}