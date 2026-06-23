import { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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

const TransmissionField = ({
  code,
  label,
  icon: Icon,
  name,
  value,
  activeField,
  children,
  wide = false
}) => (
  <div
    className={`transmission-field ${wide ? "wide" : ""} ${value ? "has-value" : ""} ${
      activeField === name ? "active" : ""
    }`}
  >
    <span className="field-code">{code}</span>
    <Icon className="field-icon" />
    {children}
    <span className="field-label">{label}</span>
    <span className="field-signal"><i></i><i></i><i></i></span>
    <span className="field-focus-line"></span>
  </div>
);

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

    try {
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
      setPhase("error");
      setStatus({
        success: false,
        message: "Transmission interrupted. Please use the direct email channel."
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
    <section className="contact" id="connect">
      <div className="contact-data-stream stream-one" aria-hidden="true"></div>
      <div className="contact-data-stream stream-two" aria-hidden="true"></div>
      <Container>
        <div className="contact-section-header">
          <div>
            <span>SECURE COMMUNICATION GATEWAY</span>
            <h2>Start a Transmission</h2>
            <p>
              Have a security challenge, software idea or ambitious collaboration in mind?
              Open a direct channel.
            </p>
          </div>
          <div className="gateway-status">
            <span><i></i>GATEWAY ONLINE</span>
            <strong>256-BIT</strong>
            <small>ENCRYPTED CHANNEL</small>
          </div>
        </div>

        <Row className="contact-terminal-grid align-items-stretch">
          <Col xs={12} lg={5}>
            <div className="contact-visual transmission-console">
              <header>
                <div>
                  <span>COMMUNICATION CORE</span>
                  <h3>Direct Channel</h3>
                </div>
                <span className="console-live"><i></i>LIVE</span>
              </header>

              <div className="communication-reactor">
                <span className="comm-ring comm-ring-one"></span>
                <span className="comm-ring comm-ring-two"></span>
                <span className="comm-ring comm-ring-three"></span>
                <span className="comm-orbit-node comm-node-one"></span>
                <span className="comm-orbit-node comm-node-two"></span>
                <span className="comm-orbit-node comm-node-three"></span>
                <div className="comm-core">
                  <Envelope size={36} />
                  <span>AG</span>
                </div>
                <div className="comm-channel channel-mail"><At /></div>
                <div className="comm-channel channel-secure"><ShieldLock /></div>
                <div className="comm-channel channel-broadcast"><Broadcast /></div>
              </div>

              <div className="transmission-wave" aria-hidden="true">
                {Array.from({ length: 22 }, (_, index) => (
                  <i
                    key={index}
                    style={{
                      "--wave-index": index,
                      "--wave-height": `${4 + (index % 7) * 3}px`
                    }}
                  ></i>
                ))}
              </div>

              <div className="contact-metrics">
                <div>
                  <span>RESPONSE</span>
                  <strong>&lt; 24H</strong>
                  <small>AVERAGE WINDOW</small>
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>GR</strong>
                  <small>ATHENS TIMEZONE</small>
                </div>
                <div>
                  <span>CHANNEL</span>
                  <strong>OPEN</strong>
                  <small>READY TO RECEIVE</small>
                </div>
              </div>

              <div className="contact-direct">
                <a href="mailto:argi.gkanatsios@outlook.com">
                  <Envelope />
                  <span><small>EMAIL UPLINK</small>argi.gkanatsios@outlook.com</span>
                  <i>↗</i>
                </a>
                <a
                  href="https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                  <span><small>PROFESSIONAL NETWORK</small>LinkedIn profile</span>
                  <i>↗</i>
                </a>
                <div>
                  <GeoAlt />
                  <span><small>BASE LOCATION</small>Greece · Europe/Athens</span>
                  <i>●</i>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <div className="secure-composer">
              <div className="composer-topbar">
                <div className="terminal-lights"><i></i><i></i><i></i></div>
                <span>SECURE_MESSAGE_COMPOSER.EXE</span>
                <small>PACKET {packetId}</small>
              </div>

              <div className="composer-progress">
                <div>
                  <span>MESSAGE INTEGRITY</span>
                  <strong>{completion}%</strong>
                </div>
                <div className="integrity-track">
                  <span style={{ "--completion": `${completion}%` }}></span>
                </div>
                <small>
                  {completion === 100
                    ? "All required data packets verified."
                    : "Complete the required fields to authorize transmission."}
                </small>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="composer-fields">
                  <TransmissionField
                    code="IDENTITY_01"
                    label="First name"
                    icon={Person}
                    name="firstName"
                    value={formDetails.firstName}
                    activeField={activeField}
                  >
                    <input
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
                    label="Phone number · optional"
                    icon={Telephone}
                    name="phone"
                    value={formDetails.phone}
                    activeField={activeField}
                  >
                    <input
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

                <fieldset className="channel-selector">
                  <legend>SELECT TRANSMISSION CHANNEL</legend>
                  <div>
                    {projectChannels.map((channel, index) => (
                      <button
                        type="button"
                        className={formDetails.topic === channel ? "active" : ""}
                        onClick={() => onFormUpdate("topic", channel)}
                        key={channel}
                      >
                        <span>0{index + 1}</span>
                        {channel}
                        <i></i>
                      </button>
                    ))}
                  </div>
                </fieldset>

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
                    required
                    rows="7"
                    maxLength="1200"
                    value={formDetails.message}
                    placeholder=" "
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField("")}
                    onChange={(event) => onFormUpdate("message", event.target.value)}
                  ></textarea>
                  <span className="message-counter">{formDetails.message.length} / 1200</span>
                </TransmissionField>

                <div className="composer-actions">
                  <div className="encryption-notice">
                    <ShieldLock />
                    <span><strong>PRIVATE CHANNEL</strong>Your data is used only to reply.</span>
                  </div>
                  <button
                    className={`transmit-button phase-${phase}`}
                    type="submit"
                    disabled={phase === "transmitting"}
                  >
                    <span className="button-energy"></span>
                    <span className="button-grid"></span>
                    <Send />
                    <strong>{buttonText}</strong>
                    <i>→</i>
                  </button>
                </div>

                {status.message && (
                  <p
                    className={`form-status ${status.success === false ? "danger" : "success"}`}
                    aria-live="polite"
                  >
                    <span></span>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
