import { z } from "zod";

export const marketplaces = [
    "Amazon", 
    "eBay", 
    "Walmart", 
    "Aliexpress", 
    "Lazada"
] as const;

export const formSchema = z.object({
    name: z.string(), 
    email: z.string({ required_error: "Please enter a company email." }).email(),
    marketplace: z.enum(marketplaces), 
    info: z.string().optional(),
    agree: z.boolean().default(false)    
});

export type FormSchema = typeof formSchema;