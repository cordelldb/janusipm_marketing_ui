<script lang="ts">
  	import type { PageData } from "./$types.js";
    import ScanForm from "@lib/components/ui/scan-form/ScanForm.svelte";
    import Logo from '$lib/images/owllogo.png';
    import { DraftingCompass } from "lucide-svelte";

    export let data: PageData;
</script>



<section class="overflow-hidden overscroll-none border border-zinc-600">
  <div class="font-sans antialiased w-full lg:grid lg:min-h-[700px] lg:grid-cols-2 xl:min-h-[865px] overflow-hidden overscroll-none">
    <div class="flex items-center justify-center">
      <div class="mx-auto grid w-[450px] gap-2">
        <div class="grid gap-2">
          <img src={Logo} alt="logo" class="w-[70px] mx-auto mb-2 opacity-75" /><span class="mx-auto text-zinc-500">JANUS  IPM</span>
          <!-- <DraftingCompass class="w-12 h-12 text-lime-500 mx-auto" /> -->
          <h1 class="text-xl text-zinc-700 font-medium text-center font-sans tracking-wider antialiased mb-2">Marketplace Scan Request</h1>
          <hr class="mb-2">
          <div class="font-sans font-base pb-4 leading-6 tracking-wide text-zinc-700 w-[450px]">
            Choose a marketplace you want researched and provide the name of your brand or specific product listings in the text area.
          </div>
          <ScanForm data={data.form} />
        </div>
        <div class="mt-2 text-center text-sm tracking-wide overflow-hidden">
          Return to 
          <a href="/" class="underline"> Home Page </a>
        </div>
      </div>
    </div>
    <div class="w-[900px] overflow-y-hidden overscroll-none bg-no-repeat bg-center bg-cover hue-rotate-45 bg-slate-400 bg-blend-multiply" style="background-image: url('src/lib/images/eye-scan.jpeg')">

    </div>
  </div>
</section>