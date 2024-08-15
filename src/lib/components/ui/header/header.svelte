<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Menubar from "$lib/components/ui/menubar";
    import { ShoppingCart } from 'lucide-svelte';
    import { Router } from 'lucide-svelte';
    import { Handshake } from 'lucide-svelte';
    import { Network } from 'lucide-svelte';
    import { BrainCircuit } from 'lucide-svelte';
    import { Database } from 'lucide-svelte';
    import { LogIn } from 'lucide-svelte';
    import { ScanSearch } from 'lucide-svelte';
    import Logo from '$lib/images/owllogo.png';
</script>

<div class="pt-6 mb-12">
    <div class="max-w-screen-3xl justify-between items-center flex mx-20">
        <div class="">
            <div class="flex items-center gap-2">
                <img src={Logo} class="w-[42px] h-[42px] mx-auto items-center" alt="logo" />
                <div class="logo text-center text-2xl items-center">JANUS</div>
                <!-- <div class="">Intellectual Property Management</div> -->

            </div>  
        </div>
        <div class="flex items-center antialiased ml-16 ">
            <Menubar.Root>
                <Menubar.Menu>
                    <Menubar.Trigger><span class="hover:text-zinc-500"><a href="/">Home</a></span></Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger><span class="hover:text-zinc-500"><a href="/platform-product-suite">The Janus Platform</a></span></Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger><span class="hover:text-zinc-500"><a href="/enforcement-analytics">Enforcement Analytics</a></span></Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger><span class="hover:text-zinc-500"><a href="/tiered-pricing">Pricing Tiers</a></span></Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger>
                        <span class="hover:text-zinc-500"><a href="/contact-us">Contact Us</a></span>
                    </Menubar.Trigger>
                </Menubar.Menu>
            </Menubar.Root>
        </div>

        <div class="flex font-sans subpixel-antialiased gap-4">
            <Button variant="outline" class="border-zinc-500 hover:bg-zinc-100 py-6 px-4 gap-2 flex text-xs text-zinc-700" href="https://admin.janusipm.com/auth/signin">
                <LogIn class="text-zinc-700 w-5 h-5 font-sans" />Log in
            </Button>
            <Button variant="outline" class="bg-lime-500">
                <ScanSearch class="ml-4 h-6 w-6 border-lime-600  bg-lime-500 px-4 py-6 text-xs font-medium tracking-wide" />Get Free Scan
            </Button>
        </div>
    </div>
</div>
<style>
    span {
        font-family: "Libre Franklin", "sans-serif";
        font-size: 14px;
        font-weight: 500;
        color:#3f3f46 ;
        letter-spacing: 0.10em;
    }
    .logo {
        font-family: "system-ui";
        letter-spacing: 0.40em;
        font-size: 20px;
        font-weight: 400;
    }
</style>