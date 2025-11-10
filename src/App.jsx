import React from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Section from './components/Section'
import BadgeList from './components/Badges'
import ExperienceTimeline from './components/ExperienceTimeline'
import ProjectGrid from './components/ProjectGrid'

export default function App() {
  const contact = {
    name: 'JAYDEEP KARSANBHAI CHAUHAN',
    location: 'Palanpur, Gujarat',
    phone: '7984802928',
    email: 'jaychauhan.jk.101@gmail.com',
    linkedin: 'https://www.linkedin.com',
  }

  const skills = {
    'Vulnerability Assessment & Penetration Testing (VAPT)': ['Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'Web & Mobile VAPT', 'Network Penetration Testing'],
    'Application Security': ['OWASP Top 10', 'API Security Testing', 'Source Code Review (SAST)', 'Dynamic Analysis (DAST)'],
    'Security Operations & Defense': ['Threat Detection', 'Incident Response Protocols', 'Email Security (O365)', 'Insider Threat Prevention', 'Data Loss Prevention (DLP)'],
    'Scripting & Automation': ['Python', 'SQL', 'ASP.NET'],
    'Platforms & Infrastructure': ['Windows', 'Linux', 'AWS & Azure (Basic Security Management)'],
  }

  const experience = [
    {
      role: 'Associate Security Analyst',
      org: 'Net-Square',
      period: 'Feb 2025 - Present',
      bullets: [
        'Perform VAPT for web/mobile, APIs, and network infrastructure',
        'Analyze and document findings with remediation guidance for clients',
        'Assist with Source Code Reviews and Red Team Assessments',
      ],
    },
    {
      role: 'Cyber Security Consultant',
      org: 'Virtual Caim Private Limited - Ahmedabad',
      period: 'Jan 2023 – Feb 2025',
      bullets: [
        'Led end-to-end VAPT across platforms to reinforce defenses',
        'Delivered actionable recommendations to reduce vulnerabilities',
        'Developed threat detection and incident response protocols',
        'Collaborated widely to embed security and ensure compliance',
      ],
    },
    {
      role: 'Jr. Cybersecurity Analyst',
      org: 'Virtual Caim - Ahmedabad',
      period: 'Jun 2022 – Dec 2022',
      bullets: [
        'Conducted VAPT using Nmap, Burp Suite, and Metasploit',
        'Reported findings with mitigation steps',
        'Configured Microsoft O365 Security Center for secure journaling and detections',
        'Supported Insider Threat Program and investigated DLP incidents',
      ],
    },
    {
      role: 'Cybersecurity Intern',
      org: 'Virtual Caim - Ahmedabad',
      period: 'Dec 2021 – May 2022',
      bullets: [
        'Assisted with research, documentation, and testing',
        'Gained exposure to threat intel, malware analysis, and forensics',
      ],
    },
  ]

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
      <Navbar email={contact.email} />
      <Hero3D name={contact.name} title="Cybersecurity Analyst" location={contact.location} phone={contact.phone} email={contact.email} />

      <Section id="about" title="About">
        <p>
          A motivated Cybersecurity Analyst with over 3 years of progressive experience in vulnerability assessment, penetration testing, and security operations. M.Sc. in IT Cybersecurity from Ganpat University with proven expertise in end-to-end VAPT, threat detection, email security configuration, and insider threat prevention. Eager to leverage technical skills and hands-on experience as an Associate Security Analyst at Net-Square.
        </p>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-black/5 p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">{group}</h3>
              <BadgeList items={items} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Professional Experience">
        <ExperienceTimeline items={experience} />
      </Section>

      <Section id="projects" title="Key Projects & Findings">
        <ProjectGrid projects={projects} />
      </Section>

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

      <Section id="certifications" title="Certifications & Achievements">
        <ul className="list-disc pl-5 space-y-2">
          <li>Gurugram Police Cybersecurity Summer Internship (07/2021)</li>
          <li>Capture the Flag (CTF) Challenges (Ongoing)</li>
          <li>Cyber Sanjivani Quiz Certificate (08/2021)</li>
        </ul>
      </Section>

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

      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
          <a href="#" className="hover:text-blue-600">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
