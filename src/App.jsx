import React from 'react'
import Spline from '@splinetool/react-spline'
import { Mail, Phone, MapPin, Shield, ExternalLink, Github, Linkedin } from 'lucide-react'

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <Shield size={18} />
        </span>
        {title}
      </h2>
      <div className="text-slate-700">{children}</div>
    </section>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-medium mr-2 mb-2">
      {children}
    </span>
  )
}

function TimelineItem({ role, org, period, bullets }) {
  return (
    <div className="relative pl-6 pb-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-600" />
      <div className="absolute left-1.5 top-1.5 bottom-0 w-px bg-blue-200" />
      <h3 className="text-lg font-semibold text-slate-900">{role} · <span className="text-blue-600">{org}</span></h3>
      <p className="text-sm text-slate-500 mb-3">{period}</p>
      <ul className="list-disc pl-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const contact = {
    name: 'JAYDEEP KARSANBHAI CHAUHAN',
    location: 'Palanpur, Gujarat',
    phone: '7984802928',
    email: 'jaychauhan.jk.101@gmail.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
  }

  const skills = {
    VAPT: ['Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'Web & Mobile VAPT', 'Network Penetration Testing'],
    'Application Security': ['OWASP Top 10', 'API Security Testing', 'Source Code Review (SAST)', 'Dynamic Analysis (DAST)'],
    'Security Operations & Defense': ['Threat Detection', 'Incident Response Protocols', 'Email Security (O365)', 'Insider Threat Prevention', 'Data Loss Prevention (DLP)'],
    'Scripting & Automation': ['Python', 'SQL', 'ASP.NET'],
    'Platforms & Infrastructure': ['Windows', 'Linux', 'AWS & Azure (Basic Security Management)'],
  }

  const projects = [
    {
      title: 'Web VAPT (E-commerce)',
      desc: 'Identified IDOR exposing order histories and Stored XSS in reviews; delivered remediation and verified fixes.',
      note: 'Details anonymized for confidentiality',
    },
    {
      title: 'Mobile VAPT (FinTech)',
      desc: 'Found hardcoded API keys, weak SSL pinning, and insecure local storage via SAST/DAST on iOS/Android.',
    },
    {
      title: 'Bug Bounty (RCE)',
      desc: 'Exploited insecure deserialization in Java leading to RCE; responsibly disclosed.',
    },
    {
      title: 'Bug Bounty (SSRF)',
      desc: 'Bypassed URL blacklist in PDF feature to access cloud metadata credentials.',
    },
    {
      title: 'Tooling (Python)',
      desc: 'Multi-threaded script to aggregate/filter subdomain enumeration (Amass, Sublist3r) and speed recon.',
    },
    {
      title: 'Malware Analysis (Android)',
      desc: 'Reversed obfuscated APK, mapped C2 infra and exfiltration of contacts/SMS.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 backdrop-blur bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <a href="#" className="font-semibold text-slate-900 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Shield size={18} />
              </span>
              <span>Jaydeep Chauhan</span>
            </a>
            <nav className="hidden md:flex gap-6 text-sm text-slate-700">
              {[
                ['About', '#about'],
                ['Skills', '#skills'],
                ['Experience', '#experience'],
                ['Projects', '#projects'],
                ['Education', '#education'],
                ['Certifications', '#certifications'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a key={href} href={href} className="hover:text-blue-600 transition-colors">
                  {label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative pt-24">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="py-28 md:py-36">
            <p className="text-xs uppercase tracking-widest text-blue-700 font-semibold">Cybersecurity Analyst</p>
            <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              {contact.name}
            </h1>
            <p className="mt-4 text-slate-700 max-w-2xl">
              A motivated Cybersecurity Analyst with 3+ years in vulnerability assessment, penetration testing, and security operations. M.Sc. in IT Cybersecurity from Ganpat University. Seeking to contribute as an Associate Security Analyst at Net-Square.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <ExternalLink size={16} /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                <Mail size={16} /> Get in Touch
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-700">
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-blue-600" /> {contact.location}</span>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-blue-600"><Phone size={16} className="text-blue-600" /> {contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-blue-600"><Mail size={16} className="text-blue-600" /> {contact.email}</a>
              <a href={contact.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-blue-600" rel="noreferrer"><Linkedin size={16} className="text-blue-600" /> LinkedIn</a>
              <a href={contact.github} target="_blank" className="inline-flex items-center gap-2 hover:text-blue-600" rel="noreferrer"><Github size={16} className="text-blue-600" /> GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p>
          I specialize in end-to-end VAPT for web, mobile, APIs, and networks. I enjoy finding complex flaws through methodical testing, then partnering with teams to fix them. I also bring hands-on experience in email security, insider threat prevention, and strengthening incident response.
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-black/5 p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">{group}</h3>
              <div className="-m-1">
                {items.map((i) => (
                  <Badge key={i}>{i}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Professional Experience">
        <div className="relative">
          <TimelineItem
            role="Associate Security Analyst"
            org="Net-Square"
            period="Feb 2025 - Present"
            bullets={[
              'Perform VAPT for web/mobile, APIs, and network infrastructure',
              'Analyze and document findings with remediation guidance for clients',
              'Assist with Source Code Reviews and Red Team Assessments',
            ]}
          />
          <TimelineItem
            role="Cyber Security Consultant"
            org="Virtual Caim Private Limited - Ahmedabad"
            period="Jan 2023 – Feb 2025"
            bullets={[
              'Led end-to-end VAPT across platforms to reinforce defenses',
              'Delivered actionable recommendations to reduce vulnerabilities',
              'Developed threat detection and incident response protocols',
              'Collaborated widely to embed security and ensure compliance',
            ]}
          />
          <TimelineItem
            role="Jr. Cybersecurity Analyst"
            org="Virtual Caim - Ahmedabad"
            period="Jun 2022 – Dec 2022"
            bullets={[
              'Conducted VAPT using Nmap, Burp Suite, and Metasploit',
              'Reported findings with mitigation steps',
              'Configured Microsoft O365 Security Center for secure journaling and detections',
              'Supported Insider Threat Program and investigated DLP incidents',
            ]}
          />
          <TimelineItem
            role="Cybersecurity Intern"
            org="Virtual Caim - Ahmedabad"
            period="Dec 2021 – May 2022"
            bullets={[
              'Assisted with research, documentation, and testing',
              'Gained exposure to threat intel, malware analysis, and forensics',
            ]}
          />
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Key Projects & Findings">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-black/5 p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
              {p.note && <p className="text-xs text-slate-500 mt-2">{p.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <ul className="space-y-3">
          <li>
            <div className="font-semibold text-slate-900">M.Sc. IT Cybersecurity, Ganpat University</div>
            <div className="text-sm text-slate-600">June 2020 - June 2022</div>
          </li>
          <li>
            <div className="font-semibold text-slate-900">Bachelor of Computer Application, Ganpat University</div>
            <div className="text-sm text-slate-600">June 2017 - June 2020</div>
          </li>
        </ul>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications & Achievements">
        <ul className="list-disc pl-5 space-y-2">
          <li>Gurugram Police Cybersecurity Summer Internship (07/2021)</li>
          <li>Capture the Flag (CTF) Challenges (Ongoing)</li>
          <li>Cyber Sanjivani Quiz Certificate (08/2021)</li>
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid sm:grid-cols-2 gap-6">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 p-4 rounded-xl border border-black/5 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
            <Mail className="text-blue-600" /> {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="flex items-center gap-3 p-4 rounded-xl border border-black/5 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
            <Phone className="text-blue-600" /> {contact.phone}
          </a>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-black/5">
            <MapPin className="text-blue-600" /> {contact.location}
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-black/5">
            <Linkedin className="text-blue-600" /> LinkedIn: <a className="hover:text-blue-600" href={contact.linkedin} target="_blank" rel="noreferrer">Profile</a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
          <a href="#" className="hover:text-blue-600">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
