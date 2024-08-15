<script lang="ts">
	import type { PageData } from "./$types.js";
	import Header from '$lib/components/ui/header/header.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { CalendarDays } from 'lucide-svelte';
	import { MailQuestion } from 'lucide-svelte';
	import { Footer } from '$lib/components/ui/footer/index.js';
	import QuestionForm from '$lib/components/ui/question-form/QuestionForm.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Main from '$lib/images/portal-1.png';
	import { DraftingCompass } from 'lucide-svelte';

	export let data: PageData;
</script>

<Header />

<section class="mb-32 mr-8 mt-16 flex justify-around bg-white pb-32 pt-8 dark:bg-zinc-800">
	<div class="pl-16 pt-8 lg:pt-8">
		<div class="ml-16">
			<div class="mb-2 pl-8 font-sans text-3xl font-thin leading-none tracking-wide text-zinc-700 dark:text-white md:text-3xl lg:text-4xl">
				Analysis Driven
			</div>
			<div class="mb-6 pl-8 font-sans text-5xl font-black leading-none tracking-tight text-zinc-700 dark:text-white md:text-5xl lg:text-6xl">
				Brand Protection Solutions
			</div>
			<div class="mb-6 ml-10 w-[700px] text-lg text-zinc-500">
				Janus IPM offers a comprehensive breakdown of current threats within your brand's ecosytem,
				and uses this data to provide a focused and impactful strategy for protecting your IP and
				preserving brand integrity.
			</div>
			<div class="mb-16 ml-10 w-[700px] text-lg text-zinc-500">
				Tell us about your brand or the products at risk and we'll run a free IP scan across the
				marketplace of your choice.
			</div>
			<div class="ml-8">
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="outline" class="text-zinc-700 tracking-wider px-4 py-7 text-sm border border-zinc-400 hover:bg-zinc-100">
              <MailQuestion class="mr-2 text-zinc-700 w-6 h-6 " />Questions?
            </Button>
          </Dialog.Trigger>
          <Dialog.Trigger>
            <Button class="ml-4 border border-lime-600 bg-lime-500 px-4 py-7 text-sm font-medium tracking-wide text-white hover:bg-lime-400">
              <CalendarDays class="h-6 w-6 mr-2" />Request a Scan
            </Button>
          </Dialog.Trigger>
          <Dialog.Content class="font-sans text-zinc-700 sm:max-w-[425px] lg:max-w-[700px]">
            <Dialog.Header class="px-4">
				<DraftingCompass class="w-12 h-12 text-blue-800 mx-auto" /><span class="mx-auto text-zinc-500">JANUS IPM</span>
              	<Dialog.Title class="pt-2 pb-2 font-sans justify-center mb-2 flex gap-2 text-xl font-medium tracking-wide text-zinc-800 subpixel-antialiased">
					Request A Marketplace Scan &nbsp; | &nbsp; Ask Us A Question
				</Dialog.Title>
				<hr class="bg-zinc-400 mb-2">
            	<Dialog.Description class="mt-6 text-sm font-base leading-6 text-zinc-500 tracking-wide subpixel-antialiased">We can scan the marketplace by brand name, product ID's, and specifc product lines, so provide as much detail and information necessary for us to satisfy your request.  We typically begin with Amazon for the initial scan but feel free to ask for a marketplace you suspect is more pressing.</Dialog.Description>
            </Dialog.Header>
				<QuestionForm data={data.form} />
          </Dialog.Content>
        </Dialog.Root>
		  </div>
		</div>
	</div>
	<div class="mr-12 flex items-start pr-20 pt-8">
		<img src={Main} alt="Main" class="w-[625px]" />
	</div>
</section>
<Footer />
