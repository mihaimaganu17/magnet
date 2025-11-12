// This directive will create a reference to the Server Function and pass that reference to the
// Client Component. When the function is called on the client, React will send a request to the
// server to execute the function and return the result.
'use server';

// Server Actions (now Server Functions) allow Client Components to call async functions executed on
// the server.

export async function createInvoice(formData: FormData) {
    // Extract the form values
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };

    console.log(rawFormData);
}