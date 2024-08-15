<script lang="ts">
	import type { PageData } from "./$types.js";
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Header } from '$lib/components/ui/header/index.js';
	import { Footer } from '$lib/components/ui/footer/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { Scan } from 'lucide-svelte';
	import Shieldcheck from '$lib/components/ui/shield-check/shieldcheck.svelte';
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import PricingForm from '@lib/components/ui/pricing-form/PricingForm.svelte';
	import { ScanSearch } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let data: PageData;

	let isContract = false;

	function updatePrices() {
    const prices = document.querySelectorAll('.price');
    prices.forEach((price) => {
      if (price instanceof HTMLElement) {
        const monthlyPrice = parseFloat(price.getAttribute('data-monthly') || '0');
        const contractPrice = Math.round(monthlyPrice * 0.8); // 20% discount

        price.textContent = isContract
          ? `$${contractPrice}`
          : `$${monthlyPrice}`;
      }
    });
  }

  $: if (isContract !== undefined) {
    updatePrices();
  }

  onMount(() => {
    updatePrices();
  });

</script>

<Header />
	



<!-----------------------------CALL TO ACTION--------------------------------------->

		<div class="bg-white mb-16 pb-14">
			<div class="grid-rows-auto container grid text-center font-frank text-6xl font-black leading-tight text-zinc-700 antialiased">
				<div class="mt-10">Get a free market scan to see</div>
				<div class="mb-5">what solution is right for you.</div>
				<div class="mb-16 font-frank text-2xl font-normal text-zinc-700">14 days of enforcement, on us!</div>
				<div class="container flex justify-center">
					<div class="mb-6 flex items-center space-x-2 font-frank antialiased">
					<Label for="savings"><div class="text-xs" id="pricingType">Monthly</div></Label>
						<Switch bind:checked={isContract} id="contractSwitch" />
					<Label for="savings"><div class="text-xs">Contract</div></Label>
					</div>
				</div>
				<div class="mb-10 text-center font-frank text-base font-semibold text-green-700 antialiased">Save 20% w/ 6 month contract</div>
			</div>

<!-------------------------------BASIC MARKETPLACE PACKAGE--------------------------->

			<div class="flex justify-center max-w-screen-4xl">
				<div class="flex col-span-3 gap-10">
					<div class="w-[400px] font-sans antialiased">
						<Card.Root>
							<Card.Header>
								<Card.Title class="text-lg font-frank">Basic Marketplace Coverage</Card.Title>
								<Card.Description class="text-xs font-['SF Display']">2 month minimum</Card.Description>
							</Card.Header>


							<Card.Content class="Starting from">
								<div class="price mb-8 text-3xl font-semibold font-sans" data-monthly="999"> $999 <span class="text-sm">/month</span></div>
									<div class="flex justify-center font-sans">
										<Dialog.Root>
											<Dialog.Trigger class="w-full"	>
												<Button class="w-full bg-lime-300 text-green-900 px-6 py-6 text-lg font-normal antialiased hover:bg-lime-500 border border-lime-600">
													<Scan class="h-4.5 w-4.5 mr-3 font-sans" />Request Scan
												</Button>
											</Dialog.Trigger>

											<Dialog.Content class="sm:max-w-[425px] lg:max-w-[600px] font-sans text-zinc-700">
												<Dialog.Header class="">
													<Dialog.Title class="tracking-wide mx-auto antialiased text-2xl font-medium text-zinc-700 font-sans gap-4 mb-2">
														<ScanSearch class="h-[64px] w-[64px] text-gray-500 mx-auto mb-2"/>
														<div class="flex items-center mx-auto">Marketplace Scan Request</div>
													</Dialog.Title>
													<hr>
													<Dialog.Description class="leading-7 text-base mt-6 ml-6 antialiased text-zinc-700 w-[500px]">
														Fill out the requested information and use the text area to provide any additional context or questions you may have.
													</Dialog.Description>
												</Dialog.Header>
													<div class="grid gap-2 py-4">
														<PricingForm data={data.form}></PricingForm>
													</div>
													<Dialog.Footer>
														
													</Dialog.Footer>
											</Dialog.Content>
										</Dialog.Root>		
									</div>

									<div class="details px-6 pt-6">
										<div class="font-medium mb-2 font-['SF Display'] traking-wide">Monitoring & Enforcement</div>
										<div class="shield"><Shieldcheck />2 Countries</div>
										<div class="shield"><Shieldcheck />2 Marketplace Platforms</div>
										<div class="shield mb-6"><Shieldcheck />Unlimited Removals</div>

										<div class="font-medium mb-2 font-['SF Display'] traking-wide">Account Features</div>
										<div class="shield"><Shieldcheck />Brand Dashboard</div>
										<div class="shield"><Shieldcheck />Monthly Reporting</div>
										<div class="shield mb-6"><Shieldcheck />Weekly Scans</div>

										<div class="font-medium mb-2 font-frank traking-wide">Add-Ons</div>
										<div class="shield"><Shieldcheck /> Seller Invoices</div>
										<div class="shield"><Shieldcheck /> MAP Monitoring (1 Platform)</div>
										<div class="shield"><Shieldcheck /> Social Media Protection</div>
										<div class="shield mb-2"><Shieldcheck /> Domain Protection</div>
									</div>
								</Card.Content>

							<Card.Footer class="grid">
								<div class="text-white">end</div>
								<div class="text-white">end</div>
							</Card.Footer>
						</Card.Root>
					</div>

<!-----------------------------PROFFESSIONAL MARKETPLACE PACKAGE--------------------------------------->

					<div class="w-[400px] font-sans antialiased">
						<Card.Root>
							<Card.Header>
								<Card.Title class="text-lg font-['SF Display']">Professional Marketplace Coverage</Card.Title>
								<Card.Description class="text-xs font-['SF Display']">2 month minimum</Card.Description>
							</Card.Header>

							<Card.Content class="">
								<div class="price mb-8 text-3xl font-semibold font-sans" data-monthly="1499">$1499 <span class="text-sm">/month</span></div>
                                <div class="flex justify-center font-frank">
                                    <Dialog.Root>
                                        <Dialog.Trigger class="w-full">
                                            <Button class="w-full text-green-900 bg-lime-300 px-6 py-6 text-lg font-normal antialiased hover:bg-lime-500 border border-lime-600">
                                                <Scan class="h-4.5 w-4.5 mr-3 font-sans" />Request Scan
                                            </Button>
                                        </Dialog.Trigger>

                                        <Dialog.Content class="sm:max-w-[425px] lg:max-w-[600px] font-sans text-zinc-700">
                                            <Dialog.Header class="">
                                                <Dialog.Title class="tracking-wide mx-auto antialiased text-2xl font-medium	 text-zinc-700 	font-sans gap-4 mb-2">
                                                    <ScanSearch class="h-[64px] w-[64px] mx-auto text-gray-500 mb-2"/>
                                                    <div class="flex items-center">Marketplace Scan Request</div>
													
                                                </Dialog.Title>
												<hr>
                                                <Dialog.Description class="leading-7 ml-6 text-base mt-6 antialiased text-zinc-700 w-[500px]"	>
                                                    Fill out the requested information and use the text area to provide any additional context or questions you may have.
                                                </Dialog.Description>
                                            </Dialog.Header>
                                                <div class="grid gap-2 py-4">
                                                    <PricingForm data={data.form}></PricingForm>
                                                </div>
                                                <Dialog.Footer>
                                                    
                                                </Dialog.Footer>
                                        </Dialog.Content>
                                    </Dialog.Root>		
                                </div>

								<div class="px-6 pt-6">
									<div class="font-medium mb-2 font-['SF Display'] traking-wide">Monitoring & Enforcement</div>
									<div class="shield"><Shieldcheck />4 Countries</div>
									<div class="shield"><Shieldcheck />5 Marketplace Platforms</div>
									<div class="shield mb-6"><Shieldcheck />Unlimited Removals</div>

									<div class="font-medium mb-2 font-['SF Display'] traking-wide">Account Features</div>
									<div class="shield"><Shieldcheck />Brand Dashboard</div>
									<div class="shield"><Shieldcheck />Monthly Reporting</div>
									<div class="shield"><Shieldcheck />1 Custom Report</div>
									<div class="shield mb-6"><Shieldcheck />Bi-	Weekly Scans</div>

									<div class="font-medium mb-2 font-['SF Display'] traking-wide">Select 1 Add-On</div>
									<div class="shield"><Shieldcheck /> Seller Invoices</div>
									<div class="shield"><Shieldcheck /> MAP Monitoring (1 Platform)</div>
									<div class="shield"><Shieldcheck /> Social Media Protection</div>
									<div class="shield mb-2"><Shieldcheck /> Domain Protection</div>
								</div>
							</Card.Content>

							<Card.Footer class="grid">
								<div class="text-white">end</div>

							</Card.Footer>
						</Card.Root>
					</div>

<!-----------------------------ENTERPRISE MARKETPLACE PACKAGE--------------------------------------->

					<div class="w-[400px] font-sans antialiased">
						<Card.Root>
							<Card.Header>
								<Card.Title class="text-lg font-sans">Enterprise Marketplace Coverage</Card.Title>
								<Card.Description class="text-xs font-sans">2 month minimum</Card.Description>
							</Card.Header>

							<Card.Content class="">
								<div class="price mb-8 text-3xl font-semibold font-sans" data-monthly="2499">$2499<span class="text-sm">/month</span>
                                </div>
                                <div class="flex justify-center font-sans">
                                    <Dialog.Root>
                                        <Dialog.Trigger class="w-full">
                                            <Button class="w-full bg-lime-300 text-green-900 px-6 py-6 text-lg font-normal antialiased hover:bg-lime-500 border border-lime-600">
                                                <Scan class="h-4.5 w-4.5 mr-3 font-sans" />Request Scan
                                            </Button>
                                        </Dialog.Trigger>

                                        <Dialog.Content class="sm:max-w-[425px] lg:max-w-[600px] font-sans text-zinc-700">
                                            <Dialog.Header class="">
                                                <Dialog.Title class="tracking-wide mx-auto antialiased text-2xl font-medium text-zinc-700 font-sans gap-4 mb-2">
                                                    <ScanSearch class="h-[64px] w-[64px] text-gray-500 mx-auto mb-2" />
                                                    <div class="flex items-center">Marketplace Scan Request</div>
                                                </Dialog.Title>
												<hr>
                                                <Dialog.Description class="leading-7 ml-6 text-base mt-6 antialiased text-zinc-700 w-[500px]">
                                                    Fill out the requested information and use the text area to provide any additional context or questions you may have.
                                                </Dialog.Description>
                                            </Dialog.Header>
                                                <div class="grid gap-2 py-4">
                                                    <PricingForm data={data.form}></PricingForm>
                                                </div>
                                                <Dialog.Footer>
                                                    
                                                </Dialog.Footer>
                                        </Dialog.Content>
                                    </Dialog.Root>		
                                </div>
									

								<div class="px-6 pt-6">
									<div class="font-medium mb-2 traking-wide">Monitoring & Enforcement</div>
									<div class="shield"><Shieldcheck />10 Countries</div>
									<div class="shield"><Shieldcheck />12	 Marketplace Platforms</div>
									<div class="shield mb-6"><Shieldcheck />Unlimited Removals</div>

									<div class="font-medium mb-2 traking-wide">Account Features</div>
									<div class="shield"><Shieldcheck />Brand Dashboard</div>
									<div class="shield"><Shieldcheck />Customized Reporting</div>
									<div class="shield"><Shieldcheck />Daily Scans</div>
									<div class="shield"><Shieldcheck />Seller Invoices</div>
									<div class="shield"><Shieldcheck />Social Media Protectiom</div>
									<div class="shield"><Shieldcheck />Domain Protection</div>
									<div class="shield mb-6"><Shieldcheck />Dedicated Account Manager</div>

									<div class="font-medium mb-2 traking-wide">Select 1 Add-On</div>
									<div class="shield"><Shieldcheck /> Addtional Brand Dashboard</div>
									<div class="shield"><Shieldcheck /> MAP Monitoring (3 Platform)</div>			
								</div>
							</Card.Content>

							<Card.Footer class="flex justify-between">
				
							</Card.Footer>
						</Card.Root>
					</div>
				</div>
			</div>
		</div>
		<div class="h-32"></div>
		<Footer />
		
<style>
	.shield {
		display: flex;
		line-height: 1.8em;
		margin-right: 1em;
		column-gap: 10px;
		font-weight: 400;
		color: 	#404040;
	}
</style>
