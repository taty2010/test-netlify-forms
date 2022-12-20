// import { redirect } from "@remix-run/node";
// import { Form } from "@remix-run/react";


// const NetlifyForm = ({ action, children, formName}) => {
//     return (
//         <Form reloadDocument action={action} method="post">
//             <input type="hidden" name="form-name" value={formName} />
//             {/* Replace with hidden style class */}
//             <p style={{display: "none"}}>
//                 <label>
//                 Don’t fill this out if you’re human: <input name="bot-field" />
//                 </label>
//             </p>
//             {children}
//         </Form>
//     )
// }

// export default function FormPage() {
//   return (
//     <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
//       <h1>Welcome to Remix</h1>
//       <NetlifyForm action="/some-form" formName="some-form">
//         <textarea name="message"  />
//         <button type="submit">Submit</button>
//       </NetlifyForm>
//     </div>
//   );
// }
