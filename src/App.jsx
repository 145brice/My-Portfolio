import { useEffect, useState } from 'react'
import {
  FaBars,
  FaBriefcase,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaGithub,
  FaTimes,
  FaTools
} from 'react-icons/fa'
import {
  SiClaude,
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiRailway,
  SiReact,
  SiSelenium,
  SiStripe,
  SiSupabase
} from 'react-icons/si'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'React', icon: SiReact },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Stripe', icon: SiStripe },
  { name: 'Gemini API', icon: FaCode },
  { name: 'Claude API', icon: SiClaude },
  { name: 'Railway', icon: SiRailway },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Selenium', icon: SiSelenium },
  { name: 'BeautifulSoup', icon: FaCode },
  { name: 'Power BI', icon: FaChartBar },
  { name: 'Tableau', icon: FaChartBar }
]

const projects = [
  {
    title: 'Processor Assistant',
    tagline: 'AI-powered mortgage processing automation',
    description:
      'Parses lender approval PDFs, extracts conditions, rewrites them into plain borrower language, and manages the full loan pipeline. Built with Python, React, Gemini Vision API, Supabase, and Stripe. Live with paying customers.',
    tags: ['Python', 'React', 'Gemini API', 'Supabase', 'Stripe', 'Railway'],
    links: [
      { label: 'Live Demo', href: 'https://processor-assistant-production.up.railway.app' }
    ]
  },
  {
    title: 'Contractor Leads SaaS',
    tagline: 'Multi-city construction permit scraping platform',
    description:
      'Scrapes building permits across Houston, Charlotte, and Phoenix, filters by trade type (electrical, plumbing, HVAC), skip-traces contacts, and delivers fresh leads monthly.',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'Skip Tracing'],
    links: []
  },
  {
    title: 'Property Manager Leads Service',
    tagline: 'Investor property identification for Nashville-area property managers',
    description:
      'Identifies recently sold investor-owned properties (LLC, duplex, multi-unit) across Davidson County and 6 surrounding counties with daily skip-trace refresh.',
    tags: ['Python', 'Web Scraping', 'Nashville Market'],
    links: []
  }
]

const additionalProjects = [
  {
    name: 'Processor Assistant',
    liveUrl: 'https://processor-assistant-production.up.railway.app/'
  },
  {
    name: 'Property Manager',
    liveUrl: 'https://property-manager-dusky-five.vercel.app/'
  },
  {
    name: 'Divorce Calc TN',
    liveUrl: 'https://divorce-calc-tn.vercel.app/'
  },
  {
    name: 'Edge Landings',
    liveUrl: 'https://edge-landings.vercel.app/'
  },
  {
    name: 'Pressure Washing',
    liveUrl: 'https://pressure-washing-taupe.vercel.app/'
  },
  {
    name: 'Ince Electric',
    liveUrl: 'https://ince-electric.vercel.app/'
  },
  {
    name: 'Leasure Time Lawn Care',
    liveUrl: 'https://leasure-time-lawn-care.vercel.app/'
  },
  {
    name: 'Realtors Commission',
    liveUrl: 'https://realtors-commission.vercel.app/'
  },
  {
    name: 'Permits Front End',
    liveUrl: 'https://permits-front-end.vercel.app/'
  },
  {
    name: 'Leadbot',
    liveUrl: 'https://leadbot-kappa.vercel.app/'
  },
  {
    name: 'Edge Barber Apply',
    liveUrl: 'https://edgebarberapply.vercel.app/'
  },
  {
    name: 'Dallas Mortgage',
    liveUrl: 'https://dallas-mortgage.vercel.app/'
  }
]

const timeline = [
  'Software Developer & SaaS Founder | Feb 2025-Present',
  'Mortgage Processor (Broker) | Secured Mortgage Processing | 2022-2025',
  'Processing Manager | L3 Discount Home Lending | 2017-2018',
  'Mortgage Loan Processor | AmeriSave | 2016-2017',
  'NMLS Licensed since 2010'
]

const resumeFiles = [
  {
    key: 'fintech',
    title: 'Fintech Hybrid Resume',
    pdf: '/resume-fintech-hybrid.pdf',
    txt: '/resume-fintech-hybrid.txt'
  },
  { key: 'it', title: 'IT Resume', pdf: '/resume-it.pdf', txt: '/resume-it.txt' },
  {
    key: 'mortgage',
    title: 'Mortgage Resume',
    pdf: '/resume-mortgage.pdf',
    txt: '/resume-mortgage.txt'
  }
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeText, setResumeText] = useState({})
  const [copiedResume, setCopiedResume] = useState('')

  const closeMenu = () => setMenuOpen(false)

  const copyResumeText = async (resumeKey) => {
    const text = resumeText[resumeKey]
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      setCopiedResume(resumeKey)
      setTimeout(() => setCopiedResume(''), 1500)
    } catch {
      setCopiedResume('')
    }
  }

  useEffect(() => {
    let active = true
    const normalizeResumePreview = (rawText) => {
      const base = rawText.replace(/\f/g, '\n')
      const lines = base.split('\n')
      const nonEmpty = lines.filter((line) => line.trim().length > 0)
      const minIndent = nonEmpty.length
        ? Math.min(
            ...nonEmpty.map((line) => {
              const match = line.match(/^(\s*)/)
              return match ? match[1].length : 0
            })
          )
        : 0
      const unindented = lines
        .map((line) => line.slice(minIndent).replace(/\s+$/, ''))
        .join('\n')
        .trim()

      // Keep the NMLS line left-aligned and add breathing room before the name line.
      return unindented.replace(/(NMLS[^\n]*)(\n)([A-Za-z][^\n]*)/g, '$1\n\n$3')
    }

    const loadResumes = async () => {
      const entries = await Promise.all(
        resumeFiles.map(async (resume) => {
          try {
            const response = await fetch(resume.txt)
            const text = await response.text()
            return [resume.key, normalizeResumePreview(text)]
          } catch {
            return [resume.key, 'Preview unavailable. Use the download button to view this resume.']
          }
        })
      )
      if (active) {
        setResumeText(Object.fromEntries(entries))
      }
    }
    loadResumes()
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-navy-950/90 backdrop-blur">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#home" className="text-base font-semibold tracking-wide text-white">
            Brice Leasure
          </a>

          <button
            className="rounded-md p-2 text-slate-200 hover:bg-slate-800 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-accent-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-navy-900 md:hidden">
            <ul className="section-shell flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-sm text-slate-200 hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="section-shell section-spacing pt-20 sm:pt-28">
          <p className="mb-3 text-2xl font-bold uppercase tracking-[0.2em] text-accent-300 sm:text-3xl">
            Portfolio
          </p>
          <p className="mb-4 inline-flex rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 text-xs font-medium text-accent-300">
            Mortgage Automation Developer
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Brice Leasure
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300 sm:text-xl">
            Mortgage Automation Developer | SaaS Founder | 13+ Years Mortgage Industry
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I build AI-powered mortgage automation tools that save processors hours every day.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-accent-300"
            >
              View My Work
            </a>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {resumeFiles.map((resume) => (
              <article
                key={resume.key}
                className="rounded-lg border border-slate-700/80 bg-navy-800/35 p-3"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold text-white">{resume.title}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyResumeText(resume.key)}
                      className="rounded-md border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-100 transition hover:border-accent-300 hover:text-accent-300"
                    >
                      {copiedResume === resume.key ? 'Copied!' : 'Copy'}
                    </button>
                    <a
                      href={resume.pdf}
                      className="rounded-md border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-100 transition hover:border-accent-300 hover:text-accent-300"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <pre className="max-h-40 overflow-auto whitespace-pre-wrap text-[10px] leading-relaxed text-slate-300">
                  {resumeText[resume.key] || 'Loading resume preview...'}
                </pre>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 sm:gap-4">
            <p>615.922.0650</p>
            <a href="mailto:145brice@gmail.com" className="hover:text-accent-300">
              145brice@gmail.com
            </a>
            <p>Old Hickory, TN</p>
          </div>
        </section>

        <section id="about" className="section-shell section-spacing border-t border-slate-800/70">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            I started in mortgage operations and became the person teams relied on to simplify manual workflows.
            After 13 years in the mortgage industry, I shifted into software development and spent the last 2 years
            building SaaS products focused on real production bottlenecks.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I bring domain-level mortgage expertise, a builder mindset, and practical automation experience as an
            NMLS-licensed professional and Power BI certified analyst.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-lg border border-slate-700/70 bg-navy-800/40 px-3 py-2 text-sm text-slate-200"
              >
                <Icon className="text-accent-300" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell section-spacing border-t border-slate-800/70">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-slate-700/70 bg-navy-800/35 p-6 shadow-glow"
              >
                <div className="mb-3 inline-flex rounded-full bg-accent-400/10 px-3 py-1 text-xs font-medium text-accent-300">
                  {project.tagline}
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-600 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 hover:border-accent-300 hover:text-accent-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-700/70 bg-navy-800/30 p-5">
            <h3 className="text-lg font-semibold text-white">Additional Live Projects</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {additionalProjects.map((project) => (
                <div
                  key={project.liveUrl}
                  className="rounded-md border border-slate-700 bg-navy-900/50 p-3"
                >
                  <p className="truncate text-sm text-slate-200" title={project.liveUrl}>
                    {project.name}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded border border-slate-600 px-2 py-1 text-xs text-slate-200 transition hover:border-accent-300 hover:text-accent-300"
                    >
                      Live
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell section-spacing border-t border-slate-800/70">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience</h2>
          <div className="mt-8 max-w-4xl">
            {timeline.map((item, index) => (
              <div key={item} className="relative pl-9">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent-400" />
                {index < timeline.length - 1 && (
                  <div className="absolute left-[5px] top-6 h-[calc(100%-8px)] w-px bg-slate-700" />
                )}
                <p className="pb-8 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell section-spacing border-t border-slate-800/70">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Certifications</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'NMLS #247673',
              'Power BI A-Z Data Science - Certified',
              'Tableau - In Training',
              'Private Pilot License'
            ].map((cert) => (
              <div key={cert} className="rounded-lg border border-slate-700/70 bg-navy-800/35 p-4 text-slate-200">
                {cert}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell section-spacing border-t border-slate-800/70 pb-24">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact</h2>
          <p className="mt-4 text-slate-300">
            Open to mortgage-tech consulting, SaaS collaborations, and automation projects.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-4 rounded-xl border border-slate-700/70 bg-navy-800/35 p-6"
            >
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-600 bg-navy-900 px-3 py-2 text-slate-100 outline-none ring-accent-300 focus:ring"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-slate-600 bg-navy-900 px-3 py-2 text-slate-100 outline-none ring-accent-300 focus:ring"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-md border border-slate-600 bg-navy-900 px-3 py-2 text-slate-100 outline-none ring-accent-300 focus:ring"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-accent-400 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-accent-300"
              >
                <FaBriefcase /> Send Message
              </button>
            </form>

            <aside className="space-y-4 rounded-xl border border-slate-700/70 bg-navy-800/35 p-6">
              <h3 className="text-lg font-semibold text-white">Direct Contact</h3>
              <p className="text-slate-300">Email: 145brice@gmail.com</p>
              <p className="text-slate-300">Phone: 615.922.0650</p>
              <p className="text-slate-300">Location: Old Hickory, TN</p>
              <a
                href="https://github.com/145brice"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-accent-300 hover:text-accent-400"
              >
                <FaGithub /> github.com/145brice
              </a>
              <div className="rounded-lg border border-slate-700 bg-navy-900/70 p-4 text-sm text-slate-400">
                Replace `your-form-id` in the form action with your Formspree endpoint to enable email delivery.
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/70 py-6 text-center text-sm text-slate-400">
        <div className="section-shell flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>Ã‚© {new Date().getFullYear()} Brice Leasure</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <FaTools className="text-accent-300" /> Built with React + Tailwind
            </span>
            <span className="inline-flex items-center gap-1">
              <FaDatabase className="text-accent-300" /> Deployed on Vercel
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}


