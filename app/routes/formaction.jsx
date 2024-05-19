// import { redirect } from "@remix-run/node";
// import { Form } from "@remix-run/react";

// export async function action({ request }) {
//   const data = await request.formData();
//   const url = new URL("/some-form", request.url);

//   try {
//     await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams(data).toString(),
//     });
//   } catch (e) {
//     console.log("Error occurred: ", e.toString());
//   }

//   return redirect("/formaction");
// }

// export default function FormPage() {
//   return (
//     <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
//       <h1>Welcome to Remix</h1>
//       <Form action="/formaction" method="post">
//         <input type="hidden" name="form-name" value="some-form" />
//         {/* Replace with hidden style class */}
//         <p style={{ display: "none" }}>
//           <label>
//             Don’t fill this out if you’re human: <input name="bot-field" />
//           </label>
//         </p>
//         <textarea name="message" />
//         <button type="submit">Submit</button>
//       </Form>
//     </div>
//   );
// }
