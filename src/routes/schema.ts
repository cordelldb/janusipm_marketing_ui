import { z } from "zod";

export const formSchema = z.object({
    first_name: z.string(),
    last_name: z.string(), 
    email: z.string({ required_error: "Please enter a company email." }).email(),
    brand_name: z.string(),  
    question: z.string().optional(),
});

export type FormSchema = typeof formSchema; 
