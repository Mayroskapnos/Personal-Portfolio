import { useState, useEffect } from "react";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") setEmail("");
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8">
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Get in touch so you never miss the latest updates
          </h3>
          {status === "sending" && <p className="mt-3 text-sm text-electric-cyan">Sending...</p>}
          {status === "error" && <p className="mt-3 text-sm text-[#ff9caf]">{message}</p>}
          {status === "success" && <p className="mt-3 text-sm text-electric-green">{message}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 border border-white/10 bg-white/[0.035] p-2 sm:flex-row">
            <input
              className="min-h-12 flex-1 bg-transparent px-3 text-white outline-none placeholder:text-white/35"
              value={email}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
            />
            <button
              className="min-h-12 bg-gradient-to-r from-electric-pink to-electric-violet px-6 text-sm font-bold text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
