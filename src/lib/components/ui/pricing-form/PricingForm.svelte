<script lang="ts">
    import * as Form from "$lib/components/ui/form/index.js";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { formSchema, type FormSchema } from "../../../../routes/tiered-pricing/schema";
    import SuperDebug,  {
      type SuperValidated,
      type Infer,
      superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Checkbox } from "$lib/components/ui/checkbox/index.js";
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
  
    $: selectedMarketplace = $formData.marketplace
    ? {
        label: $formData.marketplace,
        value: $formData.marketplace
      }
    : undefined;
  </script>
  
  <form method="POST" class="font-sans px-5" use:enhance>
  
    <Form.Field {form} name="brandname" class="mb-6">
      <Form.Control let:attrs>
        <div class="grid grid-cols-1 antialiased max-w-screen-xs">
          <Form.Label class="font-frank tracking-wide text-xs mb-1 mx-1">Brand Name</Form.Label>
            <Input {...attrs} bind:value={$formData.brandname} class="w-[500px] border border-zinc-500" />
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="email" class="mb-6">
      <Form.Control let:attrs>
        <div class="grid grid-cols-1 max-w-screen-xs antialiased">
          <Form.Label class="font-frank tracking-wide text-xs mb-1 mx-1">Email</Form.Label>
          <Input {...attrs} type="email" placeholder="name@company.com" bind:value={$formData.email} class="w-[500px] placeholder:opacity-40 border border-zinc-500 text-xs tracking-wide"/>
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
      <Form.Field {form} name="marketplace" class="mb-6">
        <Form.Control let:attrs>
          <div class="grid grid-cols-1 max-w-screen-xs">
            <Form.Label class="antialiased font-frank tracking-wide text-xs mb-1 mx-1">Marketplace</Form.Label>
            <Select.Root
              selected={selectedMarketplace}
              onSelectedChange={(v) => {
                v && ($formData.marketplace = v.value);
              }}
            >
              <Select.Input name={attrs.name} />
              <Select.Trigger {...attrs} class="w-[500px] border border-zinc-500">
                <Select.Value class="placeholder:opacity-45" placeholder="Select a marketplace" />
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
  
    <Form.Field {form} name="details" class="mb-6">
      <Form.Control let:attrs>
        <div class="grid grid-cols-7 items-center gap-4"  >
          <!-- <Form.Label class="text-right font-frank tracking-wide antialiased text-sm">Details</Form.Label> -->
          <Textarea
            {...attrs}
            placeholder="Provide any additional context or questions"
            class="w-[500px] placeholder:opacity-45 border border-zinc-500 text-xs"
            bind:value={$formData.details}
          />
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="brandname">
      <Form.Control let:attrs>
      <div class="flex gap-4">
        <Checkbox {...attrs}  />
        <Form.Label class="font-frank tracking-wide antialiased text-sm">
          I have read and accept the terms outlined in the <a href="/policy" class="text-green-700 underline">Privacy Policy</a>
        </Form.Label>    
      </div>   
      </Form.Control>
      
      <Form.FieldErrors />
      <Form.Button class=" w-full mt-8 bg-zinc-600">Submit</Form.Button>
    </Form.Field>
  </form>
  