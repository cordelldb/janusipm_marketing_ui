import { z } from "zod";

export const marketplaces = [
    "Amazon", 
    "eBay", 
    "Walmart", 
    "Aliexpress", 
    "Lazada"
] as const;

export const formSchema = z.object({
    brandname: z.string(), 
    email: z.string({ required_error: "Please enter a company email." }).email(),
    marketplace: z.enum(marketplaces), 
    details: z.string().optional(),
});

export type FormSchema = typeof formSchema;