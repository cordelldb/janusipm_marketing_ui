<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea/index.js"; 
    import { Checkbox } from "$lib/components/ui/checkbox/index.js";
    import { toast } from "svelte-sonner";
    import { formSchema, type FormSchema } from "../../../../routes/marketing-forms/marketplace-scan-request/schema";
    import * as Select from "$lib/components/ui/select/index.js";
    import {
      type SuperValidated,
      type Infer,
      superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
   
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

    $: selectedMarketplace = $formData.marketplace
    ? {
        label: $formData.marketplace,
        value: $formData.marketplace
      }
    : undefined;
  </script>


  <form method="POST" class="font-sans" use:enhance>
  
    <!-- <Form.Field {form} name="name" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label class="text-xs text-zinc-700">Full Name</Form.Label>
        <Input {...attrs} placeholder="Jane Smith" bind:value={$formData.name} class="w-[450px] border-zinc-500 placeholder:opacity-60 tracking-wider h-[35px]" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field> -->

    <Form.Field {form} name="email" class="mb-4">
      <Form.Control let:attrs>
        <div class="grid grid-cols-1 max-w-screen-xs antialiased">
          <Form.Label class="text-xs text-zinc-500 mb-2 tracking-wide">Company Email</Form.Label>
          <Input {...attrs} type="email" placeholder="name@company.com" bind:value={$formData.email} class="w-[450px] border-zinc-500 placeholder:opacity-70 text-xs tracking-wide"/>
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="marketplace" class="mb-4">
    <Form.Control let:attrs>
        <div class="grid grid-cols-1 max-w-screen-xs">
        <Form.Label class="text-xs text-zinc-500 mb-2 tracking-wide">Choose a Marketplace</Form.Label>
        <Select.Root
            selected={selectedMarketplace}
            onSelectedChange={(v) => {
            v && ($formData.marketplace = v.value);
            }}
        >
            <Select.Input name={attrs.name} />
            <Select.Trigger {...attrs} class="w-[450px]  border-zinc-500">
            <Select.Value class="placeholder:opacity-50" placeholder="Select a marketplace" />
            </Select.Trigger>
            <Select.Content>
            <Select.Item value="Amazon" label="Amazon" />
            <Select.Item value="eBay" label="eBay" />
            <Select.Item value="Walmart" label="Walmart" />
            <Select.Item value="Aliexpress" label="Aliexpress" />
            </Select.Content> 
        </Select.Root>
        </div>
    </Form.Control>
    <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="info" class="mb-4">
      <Form.Control let:attrs>
        <div class="grid grid-cols-7 items-center gap-4">
          <Textarea
            {...attrs}
            placeholder="Tell us about your brand or specific products"
            class="w-[450px] border-zinc-500 placeholder:opacity-70 text-xs tracking-wide"
            bind:value={$formData.info} rows="5"
          />
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="agree">
      <Form.Control let:attrs>
      <div class="flex gap-4">
        <Checkbox {...attrs}  />
        <Form.Label class="font-sans font-normal tracking-wide antialiased text-sm mb-4">
          I have read and accept the terms outlined in the <a href="/policy" class="text-green-700 underline">Privacy Policy</a>
        </Form.Label>    
      </div>   
      </Form.Control>
      
      <Form.FieldErrors />
      <Form.Button class="w-full py-6 mt-8 border border-lime-700 text-green-900 bg-lime-300 hover:bg-lime-400">Submit</Form.Button>
    </Form.Field>
  </form>