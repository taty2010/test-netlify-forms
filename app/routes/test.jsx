import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";


const NetlifyForm = ({ action, children, formName}) => {
    return (
        <form action={action} method="post">
            <input type="hidden" name="form-name" value={formName} />
            {children}
        </form>
    )
}

export default function TestPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <NetlifyForm action="/some-form" formName="some-form">
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </NetlifyForm>
    </div>
  );
}
