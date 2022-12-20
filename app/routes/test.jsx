import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import * as React from "react";
import { NetlifyForm } from "./netlifyForm";

export default function TestPage() {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <NetlifyForm action="/success" formName="some-form">
          <textarea name="message"  />
          <button type="submit">Submit</button>
        </NetlifyForm>
      </div>
    );
}
