import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function Page(props: { params: Promise<{id: string}>}) {
    // Get the id from the parameters
    const params = await props.params;
    const id = params.id;

    // Get the invoice from the ID and the customers using parallel requests
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs = {[
                    {label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/create`,
                        active: true,
                    }
                ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    )
}