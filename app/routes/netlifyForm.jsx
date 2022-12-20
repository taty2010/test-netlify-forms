export const handleSubmit = (event, htmlForm, formRedirect) => {
    event.preventDefault();
  
    const form = event.target;
    const data = new FormData(form);
  
    // Netlify will accept form submissions to any valid URL
    // by submitting to a static file we skip Remix's POST catcher
    fetch(htmlForm, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        window.location.href = formRedirect;
      })
      .catch((error) => alert(error));
  };
  
  export const NetlifyForm = ({children, formName, action}) => {
      return (
          <form action={action} method="POST" name="test-form-name" data-netlify="true" onSubmit={ e => handleSubmit(e, '/some-form.html', '/success')}>
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