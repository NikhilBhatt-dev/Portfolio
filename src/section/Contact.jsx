import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();

    
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Nikhil Bhatt',
                    from_email: form.email,
                    to_email: 'bhattnikhil158@gmail.com',
                    message: form.message,
                },
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );

            setLoading(false);
            alert("Message sent successfully!");

            setForm({
                name: '',
                email: '',
                message: '',
            });

        } catch (error) {
            setLoading(false);
            console.error(error);
            alert("Something went wrong, please try again.");
        }
    };
    return (
        <section className="c-space my-12 md:my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative flex min-h-[85vh] md:min-h-screen items-center justify-center overflow-hidden">
                <img
                    src="/assets/terminal.png"
                    alt="terminal-bg"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="contact-container">
                    <h3 className="head-text text-center sm:text-left">Let's talk</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white-600 sm:text-base md:text-lg">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5 md:mt-12 md:gap-7">
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
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
