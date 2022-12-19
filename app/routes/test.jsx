import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import * as React from "react";

const NetlifyForm = ({children, formName, action}) => {
    return (
        <form action={action} method="post"  data-netlify netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value={formName}/>
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

  let [isForm, setIsForm] = React.useState(<div></div>);
  
  React.useEffect(() => {
    const setForm = () => {
      return(
        <NetlifyForm action="/" formName="some-form">
          <textarea name="message"  />
          <button type="submit">Submit</button>
        </NetlifyForm>
      )
    }

    setForm();
    setIsForm(setForm);
  }, []);
  // console.log(isForm)
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <NetlifyForm action="/some-form" formName="some-form">
          <textarea name="message"  />
          <button type="submit">Submit</button>
        </NetlifyForm>
        {isForm && isForm}
      </div>
    );
}
