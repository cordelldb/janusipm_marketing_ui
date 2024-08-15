<script lang="ts">
    import * as Form from "$lib/components/ui/form/index.js";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { formSchema, type FormSchema } from "../../../../routes/schema";
    import SuperDebug,  {
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
  
  <form method="POST" class="font-sans px-5" use:enhance>
  
    <Form.Field {form} name="first_name" class="mb-6">
      <Form.Control let:attrs>
        <div class="grid grid-cols-1 antialiased max-w-screen-xs">
          <Form.Label class="font-sans tracking-wide text-xs mb-1 mt-2 mx-1">First Name</Form.Label>
            <Input {...attrs} bind:value={$formData.first_name} class="w-[600px] border border-zinc-500" />
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="last_name" class="mb-6">
      <Form.Control let:attrs>
        <div class="grid grid-cols-1 antialiased max-w-screen-xs">
          <Form.Label class="font-frank tracking-wide text-xs mb-1 mx-1">Last Name</Form.Label>
            <Input {...attrs} bind:value={$formData.last_name} class="w-[600px] border border-zinc-500"  />
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="email" class="mb-6">
      <Form.Control let:attrs>  
        <div class="grid grid-cols-1 max-w-screen-xs antialiased">
          <Form.Label class="font-frank tracking-wide text-xs mb-1 mx-1">Email</Form.Label>
          <Input {...attrs} type="email" placeholder="name@company.com" bind:value={$formData.email} class="w-[600px] placeholder:opacity-40 border border-zinc-500 tracking-wide"/>
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <!-- <Form.Field {form} name="brand_name" class="mb-6">
      <Form.Control let:attrs>
        <div class="grid grid-cols-1 antialiased max-w-screen-xs">
          <Form.Label class="font-sans tracking-wide text-xs mb-1 mx-1">Brand Name</Form.Label>
            <Input {...attrs} bind:value={$formData.brand_name} class="w-[500px] border border-zinc-500" />
        </div>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field> -->
  
    <Form.Field {form} name="question" class="mb-6">
      <Form.Control let:attrs>
        <div class="grid grid-cols-7 items-center gap-4"  >
          <Textarea 
            {...attrs}
            placeholder="Provide brand, product, and marketplace details" rows="5" class="w-[600px] placeholder:opacity-45 border border-zinc-500"
            bind:value={$formData.question}
          />
        </div>
      </Form.Control>
      <Form.FieldErrors />
      <Form.Button class="w-full mt-8 bg-lime-300 hover:bg-lime-400 py-8 border border-lime-700 text-green-900">Submit</Form.Button>
    </Form.Field>
  </form>
  