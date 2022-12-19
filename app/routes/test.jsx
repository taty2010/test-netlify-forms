import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import * as React from "react";

const NetlifyForm = ({children, formName}) => {
    return (
        <form method="post">
            <input type="hidden" name="form-name" value={formName} />
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

export default function TestPage() {

  const [isForm, setIsForm] = React.useState(false);
  
  React.useEffect(() => {
    setIsForm(true);
  }, []);
  if (!isForm) {
    return null;
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <NetlifyForm suppressHydrationWarning={true} formName="some-form">
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </NetlifyForm>
    </div>
  );
}
