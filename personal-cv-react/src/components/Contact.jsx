import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
    } else {
      alert(`Thank you ${name}!`);
    }

  };

    return (
        <div className="container">
            <section className="card">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                <br /><br />
                <button type="submit" id="submitBtn">Send</button>
                </form>
            </section>
        </div>
    );
}
export default Contact;