import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Form from '@/app/ui/invoices/delete-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import DeleteInvoiceForm from '@/app/ui/invoices/delete-form';

export default async function Page(props: { params: Promise<{id: string}>}) {
    // Get the id from the parameters
    const params = await props.params;
    const id = params.id;

    // Get the invoice from the ID
    const invoice = await fetchInvoiceById(id);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs = {[
                    {label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Delete Invoice',
                        href: `/dashboard/invoices/${id}/delete`,
                        active: true,
                    }
                ]}
            />
            <DeleteInvoiceForm invoice={invoice}/>
        </main>
    )
}