import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  At,
  Broadcast,
  ChatDots,
  Envelope,
  GeoAlt,
  Linkedin,
  Person,
  Send,
  ShieldLock,
  Telephone
} from "react-bootstrap-icons";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "Cybersecurity",
  message: ""
};

const projectChannels = ["Cybersecurity", "Software", "Collaboration"];

const emailJsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

const TransmissionField = ({
  code,
  label,
  icon: Icon,
  name,
  value,
  activeField,
  children,
  wide = false
}) => {
  const active = activeField === name || Boolean(value);

  return (
    <div
      className={`transmission-field group relative min-h-[76px] border border-white/10 bg-white/[0.035] p-4 transition focus-within:border-electric-cyan/60 focus-within:bg-white/[0.055] ${
        wide ? "md:col-span-2" : ""
      } ${active ? "has-value border-electric-cyan/35" : ""}`}
    >
      <span className="absolute left-4 top-3 text-[9px] font-bold uppercase tracking-[0.18em] text-electric-cyan/70">
        {code}
      </span>
      <Icon className="absolute right-4 top-4 text-white/28 transition group-focus-within:text-electric-cyan" />
      {children}
      <span
        className={`pointer-events-none absolute left-4 transition ${
          active
            ? "top-8 text-[10px] font-bold uppercase tracking-[0.16em] text-electric-cyan"
            : "top-[42px] text-sm text-white/45"
        }`}
      >
        {label}
      </span>
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-electric-cyan to-electric-violet transition-all duration-300 group-focus-within:w-full"></span>
    </div>
  );
};

const fieldInputClass =
  "relative z-10 mt-7 w-full border-0 bg-transparent p-0 text-base text-white outline-none placeholder-transparent";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});
  const [phase, setPhase] = useState("idle");
  const [activeField, setActiveField] = useState("");
  const packetId = useMemo(
    () => `AG-${Date.now().toString(36).slice(-5).toUpperCase()}`,
    []
  );

  const requiredFields = [
    formDetails.firstName,
    formDetails.lastName,
    formDetails.email,
    formDetails.message
  ];
  const completion = Math.round(
    (requiredFields.filter((field) => field.trim().length > 0).length / requiredFields.length) * 100
  );

  const onFormUpdate = (category, value) => {
    setFormDetails((current) => ({
      ...current,
      [category]: value
    }));
    if (status.message) setStatus({});
    if (phase !== "idle") setPhase("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPhase("transmitting");
    setStatus({});
    const endpoint = process.env.REACT_APP_CONTACT_API_URL;
    const isEmailJsConfigured = Object.values(emailJsConfig).every(Boolean);

    try {
      if (isEmailJsConfigured) {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          {
            first_name: formDetails.firstName,
            last_name: formDetails.lastName,
            sender_name: `${formDetails.firstName} ${formDetails.lastName}`.trim(),
            reply_to: formDetails.email,
            visitor_email: formDetails.email,
            phone: formDetails.phone || "Not provided",
            topic: formDetails.topic,
            message: formDetails.message
          },
          { publicKey: emailJsConfig.publicKey }
        );

        setPhase("ready");
        setStatus({ success: true, message: "Transmission received successfully." });
        setFormDetails(formInitialDetails);
        return;
      }

      if (!endpoint) {
        const subject = encodeURIComponent(
          `[${formDetails.topic}] Portfolio contact from ${formDetails.firstName} ${formDetails.lastName}`
        );
        const body = encodeURIComponent(
          `Transmission: ${packetId}\n` +
          `Topic: ${formDetails.topic}\n` +
          `Name: ${formDetails.firstName} ${formDetails.lastName}\n` +
          `Email: ${formDetails.email}\n` +
          `Phone: ${formDetails.phone || "Not provided"}\n\n` +
          formDetails.message
        );
        window.location.href = `mailto:argi.gkanatsios@outlook.com?subject=${subject}&body=${body}`;
        setPhase("ready");
        setStatus({
          success: true,
          message: "Transmission prepared. Your email application is ready."
        });
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(formDetails)
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      const result = await response.json();
      if (result.code === 200 || result.status === "Message Sent") {
        setPhase("ready");
        setStatus({ success: true, message: "Transmission received successfully." });
        setFormDetails(formInitialDetails);
      } else {
        throw new Error("Contact request failed");
      }
    } catch (error) {
      console.error("EmailJS contact submission failed:", error);
      setPhase("error");
      const errorDetails = error?.text || error?.message;
      setStatus({
        success: false,
        message: errorDetails
          ? `Transmission interrupted: ${errorDetails}`
          : "Transmission interrupted. Please use the direct email channel."
      });
    }
  };

  const buttonText =
    phase === "transmitting"
      ? "Encrypting transmission..."
      : phase === "ready"
        ? "Channel initialized"
        : phase === "error"
          ? "Retry transmission"
          : "Transmit message";

  return (
    <section className="contact page-section overflow-hidden" id="connect">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_50%,rgba(255,95,189,0.18),transparent_34%),radial-gradient(circle_at_88%_40%,rgba(77,225,255,0.16),transparent_35%),linear-gradient(135deg,rgba(15,8,22,0.98),rgba(7,7,14,0.99))]"></div>
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:54px_54px] opacity-[0.05]"></div>

      <div className="portfolio-container">
        <div className="contact-section-header flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-kicker">Secure communication gateway</span>
            <h2 className="text-balance text-4xl font-bold md:text-5xl">Start a Transmission</h2>
            <p className="mt-4 text-base leading-7 text-white/62">
              Have a security challenge, software idea or ambitious collaboration in mind?
              Open a direct channel.
            </p>
          </div>
          <div className="gateway-status clip-cyber border border-electric-green/25 bg-electric-green/5 px-5 py-4 text-right">
            <span className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
              <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
              Gateway online
            </span>
            <strong className="mt-2 block text-3xl text-white">256-BIT</strong>
            <small className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/42">
              Encrypted channel
            </small>
          </div>
        </div>

        <div className="contact-terminal-grid mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="contact-visual transmission-console glass-panel overflow-hidden p-5 sm:p-6">
            <header className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-cyan">
                  Communication core
                </span>
                <h3 className="mt-2 text-2xl font-bold">Direct Channel</h3>
              </div>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
                <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
                Live
              </span>
            </header>

            <div className="communication-reactor relative mx-auto my-10 grid h-72 w-72 max-w-full place-items-center">
              <span className="absolute h-72 w-72 animate-spin-slow rounded-full border border-dashed border-electric-cyan/25"></span>
              <span className="absolute h-56 w-56 animate-[spin-slow_11s_linear_infinite_reverse] rounded-full border border-electric-violet/25"></span>
              <span className="absolute h-36 w-36 rounded-full bg-electric-cyan/10 blur-2xl"></span>
              <div className="comm-core z-10 grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-electric-cyan shadow-glow">
                <Envelope size={34} />
                <span className="text-xs font-bold tracking-[0.18em] text-white">AG</span>
              </div>
              <div className="absolute left-[12%] top-[8%] grid h-12 w-12 place-items-center rounded-full border border-electric-cyan/25 bg-space-900 text-electric-cyan">
                <At />
              </div>
              <div className="absolute right-[4%] top-[28%] grid h-12 w-12 place-items-center rounded-full border border-electric-violet/25 bg-space-900 text-electric-violet">
                <ShieldLock />
              </div>
              <div className="absolute bottom-[7%] left-[26%] grid h-12 w-12 place-items-center rounded-full border border-electric-pink/25 bg-space-900 text-electric-pink">
                <Broadcast />
              </div>
            </div>

            <div className="transmission-wave flex h-12 items-end justify-between gap-1 border-y border-white/10 py-3">
              {Array.from({ length: 22 }, (_, index) => (
                <i
                  className="w-1 animate-wave bg-electric-cyan/70"
                  key={index}
                  style={{
                    height: `${4 + (index % 7) * 3}px`,
                    animationDelay: `${index * -0.07}s`
                  }}
                ></i>
              ))}
            </div>

            <div className="contact-metrics mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Response", "< 24H", "Average window"],
                ["Location", "GR", "Athens timezone"],
                ["Channel", "Open", "Ready to receive"]
              ].map(([label, value, detail]) => (
                <div className="border border-white/10 bg-white/[0.035] p-4" key={label}>
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/38">{label}</span>
                  <strong className="mt-2 block text-xl text-white">{value}</strong>
                  <small className="text-[9px] font-bold uppercase tracking-[0.14em] text-electric-cyan/70">{detail}</small>
                </div>
              ))}
            </div>

            <div className="contact-direct mt-5 grid gap-3">
              {[
                {
                  href: "mailto:argi.gkanatsios@outlook.com",
                  icon: Envelope,
                  label: "Email uplink",
                  text: "argi.gkanatsios@outlook.com"
                },
                {
                  href: "https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/",
                  icon: Linkedin,
                  label: "Professional network",
                  text: "LinkedIn profile",
                  external: true
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-white transition hover:border-electric-cyan/35 hover:bg-white/[0.06]"
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel="noreferrer"
                    key={item.label}
                  >
                    <Icon className="text-electric-cyan" />
                    <span className="min-w-0 flex-1 text-sm">
                      <small className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/38">{item.label}</small>
                      {item.text}
                    </span>
                    <i className="text-electric-cyan">-&gt;</i>
                  </a>
                );
              })}
              <div className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-white">
                <GeoAlt className="text-electric-violet" />
                <span className="min-w-0 flex-1 text-sm">
                  <small className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/38">Base location</small>
                  Greece - Europe/Athens
                </span>
                <i className="text-electric-green">*</i>
              </div>
            </div>
          </div>

          <div className="secure-composer glass-panel overflow-hidden">
            <div className="composer-topbar flex flex-col gap-3 border-b border-white/10 bg-white/[0.035] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex gap-1.5">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#ff5d7d] shadow-[0_0_7px_#ff5d7d]"></i>
                  <i className="h-2.5 w-2.5 rounded-full bg-[#ffc85d] shadow-[0_0_7px_#ffc85d]"></i>
                  <i className="h-2.5 w-2.5 rounded-full bg-[#76ffc0] shadow-[0_0_7px_#76ffc0]"></i>
                </span>
                Secure_message_composer.exe
              </div>
              <small>Packet {packetId}</small>
            </div>

            <div className="composer-progress border-b border-white/10 p-5">
              <div className="flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                <span>Message integrity</span>
                <strong className="text-electric-cyan">{completion}%</strong>
              </div>
              <div className="mt-3 h-2 overflow-hidden bg-white/10">
                <span
                  className="block h-full bg-gradient-to-r from-electric-cyan to-electric-violet transition-all duration-300"
                  style={{ width: `${completion}%` }}
                ></span>
              </div>
              <small className="mt-3 block text-xs text-white/48">
                {completion === 100
                  ? "All required data packets verified."
                  : "Complete the required fields to authorize transmission."}
              </small>
            </div>

            <form className="p-5 sm:p-6" onSubmit={handleSubmit}>
              <div className="composer-fields grid gap-4 md:grid-cols-2">
                <TransmissionField
                  code="IDENTITY_01"
                  label="First name"
                  icon={Person}
                  name="firstName"
                  value={formDetails.firstName}
                  activeField={activeField}
                >
                  <input
                    className={fieldInputClass}
                    aria-label="First name"
                    required
                    type="text"
                    value={formDetails.firstName}
                    placeholder=" "
                    autoComplete="given-name"
                    onFocus={() => setActiveField("firstName")}
                    onBlur={() => setActiveField("")}
                    onChange={(event) => onFormUpdate("firstName", event.target.value)}
                  />
                </TransmissionField>

                <TransmissionField
                  code="IDENTITY_02"
                  label="Last name"
                  icon={Person}
                  name="lastName"
                  value={formDetails.lastName}
                  activeField={activeField}
                >
                  <input
                    className={fieldInputClass}
                    aria-label="Last name"
                    required
                    type="text"
                    value={formDetails.lastName}
                    placeholder=" "
                    autoComplete="family-name"
                    onFocus={() => setActiveField("lastName")}
                    onBlur={() => setActiveField("")}
                    onChange={(event) => onFormUpdate("lastName", event.target.value)}
                  />
                </TransmissionField>

                <TransmissionField
                  code="UPLINK_03"
                  label="Email address"
                  icon={At}
                  name="email"
                  value={formDetails.email}
                  activeField={activeField}
                >
                  <input
                    className={fieldInputClass}
                    aria-label="Email address"
                    required
                    type="email"
                    value={formDetails.email}
                    placeholder=" "
                    autoComplete="email"
                    onFocus={() => setActiveField("email")}
                    onBlur={() => setActiveField("")}
                    onChange={(event) => onFormUpdate("email", event.target.value)}
                  />
                </TransmissionField>

                <TransmissionField
                  code="VOICE_04"
                  label="Phone number - optional"
                  icon={Telephone}
                  name="phone"
                  value={formDetails.phone}
                  activeField={activeField}
                >
                  <input
                    className={fieldInputClass}
                    aria-label="Phone number optional"
                    type="tel"
                    value={formDetails.phone}
                    placeholder=" "
                    autoComplete="tel"
                    onFocus={() => setActiveField("phone")}
                    onBlur={() => setActiveField("")}
                    onChange={(event) => onFormUpdate("phone", event.target.value)}
                  />
                </TransmissionField>
              </div>

              <fieldset className="channel-selector mt-5">
                <legend className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Select transmission channel
                </legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {projectChannels.map((channel, index) => (
                    <button
                      type="button"
                      className={`relative border px-4 py-3 text-left text-sm font-bold transition ${
                        formDetails.topic === channel
                          ? "border-electric-cyan/60 bg-electric-cyan/10 text-white"
                          : "border-white/10 bg-white/[0.035] text-white/58 hover:border-white/25 hover:text-white"
                      }`}
                      onClick={() => onFormUpdate("topic", channel)}
                      aria-pressed={formDetails.topic === channel}
                      key={channel}
                    >
                      <span className="mr-3 text-[10px] text-electric-cyan">0{index + 1}</span>
                      {channel}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5">
                <TransmissionField
                  code="PAYLOAD_05"
                  label="Describe the mission, idea or challenge"
                  icon={ChatDots}
                  name="message"
                  value={formDetails.message}
                  activeField={activeField}
                  wide
                >
                  <textarea
                    className={`${fieldInputClass} min-h-40 resize-y`}
                    aria-label="Describe the mission, idea or challenge"
                    required
                    rows="7"
                    maxLength="1200"
                    value={formDetails.message}
                    placeholder=" "
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField("")}
                    onChange={(event) => onFormUpdate("message", event.target.value)}
                  ></textarea>
                  <span className="absolute bottom-3 right-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                    {formDetails.message.length} / 1200
                  </span>
                </TransmissionField>
              </div>

              <div className="composer-actions mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3 text-sm text-white/58">
                  <ShieldLock className="text-electric-cyan" />
                  <span><strong className="mr-2 text-white">Private channel</strong>Your data is used only to reply.</span>
                </div>
                <button
                  className={`transmit-button relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden px-6 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70 ${
                    phase === "error"
                      ? "bg-[#bc3150]"
                      : phase === "ready"
                        ? "bg-electric-green text-space-950"
                        : "bg-gradient-to-r from-electric-pink via-electric-violet to-electric-cyan"
                  }`}
                  type="submit"
                  disabled={phase === "transmitting"}
                >
                  <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/18 to-transparent"></span>
                  <Send className="relative z-10" />
                  <strong className="relative z-10">{buttonText}</strong>
                  <i className="relative z-10">-&gt;</i>
                </button>
              </div>

              {status.message && (
                <p
                  className={`mt-5 border p-4 text-sm ${
                    status.success === false
                      ? "border-[#ff5d7d]/35 bg-[#ff5d7d]/10 text-[#ffb9c7]"
                      : "border-electric-green/35 bg-electric-green/10 text-electric-green"
                  }`}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
