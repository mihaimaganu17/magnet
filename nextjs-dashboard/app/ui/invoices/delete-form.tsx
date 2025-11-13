'use client';

import { InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { deleteInvoice } from '@/app/lib/actions';
import { lusitana_400 } from '@/app/ui/fonts';

const iconMap = {
    customer: UserCircleIcon,
    amount: CurrencyDollarIcon,
    status_pending: ClockIcon,
    status_paid: CheckIcon,
};

export function InvoiceCard({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'customer' | 'amount' | 'status_pending' | 'status_paid';
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana_400.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
  }

export default function DeleteInvoiceForm({
  invoice,
}: {
  invoice: InvoiceForm;
}) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, invoice.id);
  const status = invoice.status === 'pending' ? 'status_pending' : 'status_paid';
  
  return (
    <form action ={deleteInvoiceWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <InvoiceCard title="Customer name" value={invoice.id} type="customer" />

        {/* Invoice Amount */}
        <InvoiceCard title="Amount" value={invoice.amount} type="amount" />

        {/* Invoice Status */}
        ;
        <InvoiceCard title="Status" value={invoice.status} type={ status } />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Delete Invoice</Button>
      </div>
    </form>
  );
}
