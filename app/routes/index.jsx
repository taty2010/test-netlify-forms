export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <form name="feedback-form" netlify>
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
