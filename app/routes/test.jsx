import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export default function TestPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Form reloadDocument data-netlify="true" name="feedback-form" method="post">
        <input type="hidden" name="form-name" value="feedback-form" />
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
