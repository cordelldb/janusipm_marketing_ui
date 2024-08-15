<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Form from "$lib/components/ui/form/index.js";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { formSchema, type FormSchema } from "../../../../routes/contact-us/schema";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { toast } from "svelte-sonner";
    
    export let data: SuperValidated<Infer<FormSchema>>;
    
    const form = superForm(data, {
        validators: zodClient(formSchema),
        onUpdated: ({ form: f }) => {
        if (f.valid) {
          toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
        } else {
          toast.error("Please fix the errors in the form.");
        }
    }
    });
 
    const { form: formData, enhance } = form;
</script>


<form method="POST" use:enhance class="font-sans subpixel-antialiased grid grid-cols-1 gap-8 p-6 -mt-96 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-zinc-300 shadow-lg lg:mb-28 dark:bg-zinc-800 dark:border-zinc-700 sm:grid-cols-2">
    <Form.Field {form} name="first_name">
        <Form.Control let:attrs>
            <div>
                <Form.Label class="block mb-2 text-sm font-base text-zinc-600 dark:text-zinc-300">First Name</Form.Label>
                <Input {...attrs} bind:value={$formData.first_name} class="block p-3 w-full text-xs tracking-wide text-zinc-500 rounded-lg border border-zinc-400 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light" placeholder="Clarence" required />
            </div>
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="last_name">
        <Form.Control let:attrs>
            <div>
                <Form.Label class="block mb-2 text-sm font-base text-zinc-600 dark:text-zinc-300">Last Name</Form.Label>
                <Input {...attrs} type="text" bind:value={$formData.last_name} class="block p-3 w-full text-xs tracking-wide text-zinc-500 rounded-lg border border-zinc-400  shadow-sm focus:ring-zinc-500 focus:border-zinc-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light" placeholder="Boddiker" required />
            </div>
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="email">
        <Form.Control let:attrs>
            <div>
                <Form.Label class="block mb-2 text-sm font-base text-zinc-600 dark:text-zinc-300">Your email</Form.Label>
                <Input {...attrs} type="email" placeholder="name@company.com" bind:value={$formData.email} class="block tracking-wide p-3 w-full text-xs text-zinc-90 rounded-lg border border-zinc-400 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light" required />
            </div>
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="brand_name">
        <Form.Control let:attrs>
            <div>
                <Form.Label class="block mb-2 text-sm font-base text-zinc-600 dark:text-zinc-300">Brand Name</Form.Label>
                <Input type="text" class="shadow-sm border border-zinc-400 text-zinc-600 text-xs rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light" placeholder="Nike, Gucci, Rolex" required />
            </div>
        </Form.Control>
    </Form.Field>
    <Form.Field {form} name="message">
        <Form.Control let:attrs>
            <div class="w-[720px]">
                <Form.Label class="block mb-2 text-sm font-base text-zinc-600 dark:text-zinc-300">Your message</Form.Label>
                <Textarea class="block p-2.5 w-full text-xs text-zinc-900  rounded-lg shadow-sm border border-zinc-400 focus:ring-zinc-500 focus:border-zinc-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" placeholder="Leave a comment..." />
                <p class="mt-4 mb-2 text-sm text-zinc-600 w-full tracking-wide leading-6">By submitting this form you agree to our <a href="/tou" class="text-zinc-600 underline hover:underline dark:text-zinc-500">Terms of Use</a> and our <a href="/policy" class="text-primary-600 hover:underline dark:text-zinc-500 underline">Privacy Policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
            </div>
            <Button class="py-7 px-6 text-sm font-medium text-center border border-zinc-400 text-green-900 rounded-lg bg-lime-300 sm:w-fit hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">Send message</Button>
        </Form.Control>
    </Form.Field>    
</form>
