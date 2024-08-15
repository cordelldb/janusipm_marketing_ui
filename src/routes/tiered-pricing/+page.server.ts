import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { formSchema } from "./schema.js";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
 
export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));

    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    try {
      // Prepare the form data
      const formData = new FormData();
      Object.entries(form.data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      // Send the form data to the PHP script
      const response = await fetch('your_php_script_url.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form to PHP script');
      }

      const result = await response.json();

      // Handle the response from the PHP script
      return {
        form,
        success: true,
        message: result.message || 'Form submitted successfully',
      };
    } catch (error) {
      console.error('Error submitting form:', error);
      return fail(500, {
        form,
        success: false,
        message: 'An error occurred while submitting the form',
      });
    }
  },
};

// import { db } from '$lib/database';
// 
// export const actions: Actions = {
//   default: async (event) => {
//     const form = await superValidate(event, zod(formSchema));
// 
//     if (!form.valid) {
//       return fail(400, {
//         form,
//       });
//     }
// 
//     try {
//       // Map form fields to database columns
//       const dbData = {
//         db_column1: form.data.formField1,
//         db_column2: form.data.formField2,
//         // Add more mappings as needed
//       };
// 
//       // Insert the mapped data into the database
//       const result = await db.insert(dbData).into('your_table_name');
// 
//       return {
//         form,
//         success: true,
//         message: 'Form submitted successfully',
//         id: result[0], // Assuming the insert returns the new record's ID
//       };
//     } catch (error) {
//       console.error('Error inserting data:', error);
//       return fail(500, {
//         form,
//         success: false,
//         message: 'An error occurred while saving the form data',
//       });
//     }
//   },
// };


// 
// export const actions: Actions = {
//   default: async (event: any) => {
//     const form = await superValidate(event, zod(formSchema));
//     if (!form.valid) {
//       return fail(400, {
//         form,
//       });
//     } 
//     return {
//       form,
//     };
//   },
// };  

