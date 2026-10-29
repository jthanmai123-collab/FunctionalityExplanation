import React, { useState } from "react";

const benefits = [
  { icon: "♙", title: "Expert Faculty", text: "Our faculty are subject matter experts with practical experience. They believe in a student-first learning approach." },
  { icon: "♟♟♟", title: "Complete Success Package", text: "Leading exam preparation with video lectures, live sessions, detailed notes, practice questions and revision support." },
  { icon: "▣", title: "Placements", text: "Resume building workshops, mock interviews and career guidance to help you impress top employers and get the dream job." },
];

const facts = [
  { icon: "▤", label: "Levels", value: "Three (13 papers)" },
  { icon: "◷", label: "Duration", value: "6–30 months" },
  { icon: "▱", label: "Exams", value: "Quarterly (Online)" },
  { icon: "▣", label: "Exemptions", value: "Up to 9 papers" },
];

const levels = [
  {
    title: "Knowledge Level",
    count: "3 papers",
    groups: [{ heading: "", items: ["Business and Technology (BT)", "Management Accounting (MA)", "Financial Accounting (FA)"] }],
  },
  {
    title: "Skill Level",
    count: "6 papers",
    groups: [{ heading: "", items: ["Corporate and Business Law (LW)", "Performance Management (PM)", "Taxation (TX)", "Financial Reporting (FR)", "Audit and Assurance (AA)", "Financial Management (FM)"] }],
  },
  {
    title: "Professional Level",
    count: "4 papers",
    groups: [
      { heading: "Compulsory", items: ["Strategic Business Leader (SBL)", "Strategic Business Reporting (SBR)"] },
      { heading: "Two out of the following", items: ["Advanced Financial Management (AFM)", "Advanced Performance Management (APM)", "Advanced Taxation (ATX)", "Advanced Audit and Assurance (AAA)"] },
    ],
  },
];

function Header({ onCallback }) {
  const [expanded, setExpanded] = useState(false);
  const navItems = [["ACCA COURSES", "#learn"], ["WHY INDIGOLEARN", "#why-us"], ["PROGRAMMES", "#eligibility"], ["FREE RESOURCES", "#learn"]];
  return (
    <header className="topbar">
      <nav className="navbar navbar-expand-lg container py-0">
        <a className="navbar-brand site-brand" href="#home">
          <span className="brand-symbol">i</span><span>indigo<span className="brand-light">learn</span></span>
        </a>
        <button className="navbar-toggler nav-toggle" aria-label="Toggle navigation" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            {navItems.map(([label, href]) => <li className="nav-item" key={label}><a className="nav-link" href={href} onClick={() => setExpanded(false)}>{label}</a></li>)}
          </ul>
          <button className="login-button" onClick={onCallback}>⊕ Log In/Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

function CallbackForm({ onSubmit }) {
  const [form, setForm] = useState({ phone: "", email: "", qualification: "", interest: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); onSubmit(); };
  return (
    <form className="callback-form" onSubmit={submit}>
      <h2>Aspiring to be an ACCA? Get in touch with us!</h2>
      <input aria-label="Phone number" name="phone" value={form.phone} onChange={update} placeholder="Phone Number*" type="tel" required />
      <input aria-label="Email ID" name="email" value={form.email} onChange={update} placeholder="Email ID*" type="email" required />
      <select aria-label="Current qualification" name="qualification" value={form.qualification} onChange={update} required>
        <option value="">Current Qualification*</option><option>Class 12</option><option>Undergraduate</option><option>Graduate</option><option>Working professional</option>
      </select>
      <select aria-label="Interested in" name="interest" value={form.interest} onChange={update} required>
        <option value="">Interested in*</option><option>ACCA</option><option>ACCA with B.Com</option><option>Eligibility and exemptions</option>
      </select>
      <button type="submit" className="form-submit">Request Call Back</button>
      <p className="form-note">By submitting, you agree to be contacted by our counselling team.</p>
    </form>
  );
}

function StatPill({ label, value }) {
  return <div className="stat-pill"><span className="stat-label">{label}</span><strong>{value}</strong></div>;
}

function Hero({ onCallback }) {
  return (
    <section className="hero-wrap" id="home">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="hero-copy">
              <h1>Become ACCA in 18 months</h1>
              <p>Acquire globally recognised accounting qualification. ACCA (also called as Global CA) can help you build a career with top MNCs &amp; Big 4. Begin your ACCA prep with IndigoLearn.</p>
              <div className="stats-grid">
                <StatPill label="Registered Students" value="24,786+" />
                <StatPill label="Courses Enrolled" value="65,147" />
                <StatPill label="Students Worldwide" value="2,28,08,687" />
                <StatPill label="Faculty" value="8 Experts" />
              </div>
              <div className="hero-actions"><a href="#learn" className="btn btn-purple">Download Brochure</a><button className="btn btn-coral" onClick={onCallback}>Enquire Now</button></div>
              <small className="timeline-note">*Completion time depends on eligibility, exemptions, exam schedules and individual progress.</small>
            </div>
          </div>
          <div className="col-lg-6"><CallbackForm onSubmit={onCallback} /></div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children, subtitle }) {
  return <div className="section-title text-center"><h2>{children}</h2><span className="title-underline" />{subtitle && <p>{subtitle}</p>}</div>;
}

function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="container">
        <SectionTitle>Why Choose Us?</SectionTitle>
        <div className="row justify-content-center g-3 benefit-row">
          {benefits.map((item) => <div className="col-md-4" key={item.title}><article className="benefit-card h-100"><div className="benefit-icon" aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article></div>)}
        </div>
      </div>
    </section>
  );
}

function QuickFacts() {
  return <section className="facts-section"><div className="container"><div className="row g-2">{facts.map((fact) => <div className="col-6 col-lg-3" key={fact.label}><article className="fact-card"><div className="fact-top"><span>{fact.icon}</span><strong>{fact.label}</strong></div><p>{fact.value}</p></article></div>)}</div></div></section>;
}

function Eligibility() {
  const items = [
    ["Class 12", "Students who have completed higher secondary education can explore the relevant ACCA entry route."],
    ["Graduates", "Previous academic qualifications may make you eligible for exemptions, subject to ACCA assessment."],
    ["Working professionals", "Build specialist accounting, audit and finance skills alongside your career."],
  ];
  return <section className="eligibility-section content-section" id="eligibility"><div className="container"><SectionTitle subtitle="Explore the entry route that fits your academic background.">ACCA – Eligibility</SectionTitle><div className="row g-3">{items.map(([title, text], i) => <div className="col-md-4" key={title}><article className="eligibility-card h-100"><span className="eligibility-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></div>)}</div><p className="disclaimer">Eligibility and exemptions depend on current ACCA rules and individual qualifications.</p></div></section>;
}

function LearnSection() {
  return <section className="content-section learn-section" id="learn"><div className="container"><SectionTitle>What will you learn in ACCA?</SectionTitle><div className="levels-grid">{levels.map((level) => <article className="level-card" key={level.title}><h3>{level.title}</h3><div className="level-content">{level.groups.map((group, i) => <div key={i} className="level-group">{group.heading && <h4>{group.heading}</h4>}<ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div><div className="level-count">{level.count}</div></article>)}</div></div></section>;
}

function Placement() {
  return <section className="placement-section content-section" id="placements"><div className="container"><SectionTitle>100% Placement Assistance</SectionTitle><div className="placement-copy"><article><h3>Resume Building</h3><p>We provide professional guidance to help you create an effective resume to make a lasting impression.</p></article><article><h3>Career Counselling</h3><p>We provide career counselling to understand your preferences and aptitude, and guide you at every step of your journey.</p></article><article><h3>Jobs</h3><p>We help you explore opportunities with corporate affiliations and prepare to find the right fit.</p></article></div><p className="placement-disclaimer">Placement assistance does not guarantee employment.</p></div></section>;
}

function JourneyCTA({ onCallback }) {
  return <section className="journey-section content-section"><div className="container"><div className="row align-items-center g-4"><div className="col-lg-6"><h2>Kick off your ACCA Prep journey with IndigoLearn</h2><p>Sign-in and get instant access to our FREE Courses.</p><button className="btn btn-coral" onClick={onCallback}>Start Learning Now</button></div><div className="col-lg-6"><CallbackForm onSubmit={onCallback} /></div></div></div></section>;
}

function CallbackModal({ show, onClose }) {
  if (!show) return null;
  return <div className="modal-backdrop-custom" role="presentation" onMouseDown={onClose}><div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title" onMouseDown={(e) => e.stopPropagation()}><button className="modal-x" aria-label="Close modal" onClick={onClose}>×</button><div className="success-check">✓</div><h2 id="success-title">Thank you!</h2><p>Your callback request has been received successfully. Our team will get in touch with you soon.</p><button className="btn btn-purple" onClick={onClose}>Close</button></div></div>;
}

function Footer() {
  return <footer className="site-footer"><div className="container d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2"><a className="site-brand footer-brand" href="#home"><span className="brand-symbol">i</span><span>indigo<span className="brand-light">learn</span></span></a><p>© {new Date().getFullYear()} IndigoLearn. All rights reserved.</p></div></footer>;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return <><Header onCallback={openModal} /><main><Hero onCallback={openModal} /><WhyChooseUs /><QuickFacts /><Eligibility /><LearnSection /><Placement /><JourneyCTA onCallback={openModal} /></main><Footer /><CallbackModal show={modalOpen} onClose={closeModal} /></>;
}
