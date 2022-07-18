import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";


const NetlifyForm = ({ action, children}) => {
    return (
        <form action={action} method="post">
            <input type="hidden" name="form-name" value={action.replace("/", "")} />
            {children}
        </form>
    )
}

export default function TestPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <NetlifyForm action="/some-form">
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </NetlifyForm>
    </div>
  );
}
