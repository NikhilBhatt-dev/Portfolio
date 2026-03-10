import { useState } from "react";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section className="c-space my-20" id="contact">

            <div className="relative min-h-screen flex items-center justify-center flex-col">

                <div className="contact-container">

                    <h3 className="head-text">Let's talk</h3>

                    <form
                        action="https://formsubmit.co/6c1ae2dfdbb4d118510f1b0a5b39c298"
                        method="POST"
                        className="mt-12 flex flex-col space-y-7"
                    >

                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Portfolio Message" />
                       

                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts..."
                            />
                        </label>

                        <button className="field-btn" type="submit">
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;