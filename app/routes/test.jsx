import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import * as React from "react";

const NetlifyForm = ({children, formName}) => {
    return (
        <form method="post" value={formName} data-netlify netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" />
            {/* Replace with hidden style class */}
            <p style={{display: "none"}}>
                <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            {children}
        </form>
    )
}

let isHydrating = true;

export default function TestPage() {

  let [isForm, setIsForm] = React.useState(!isHydrating);
  
  React.useEffect(() => {
    isHydrating = false;
    setIsForm(true);
  }, []);

  if (isForm) {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <NetlifyForm formName="some-form">
          <textarea name="message"  />
          <button type="submit">Submit</button>
        </NetlifyForm>
      </div>
    );
  } else {
    return <div />;
  }
}
