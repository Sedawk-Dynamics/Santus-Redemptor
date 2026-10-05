export type Job = {
  id: string
  title: string
  reportsTo: string
  location: string
  arrangement: string
  experience: string
  education: string
  overview: string[]
  responsibilities: string[]
  mustHave: string[]
  niceToHave: string[]
  /** Subject line applicants are asked to use. */
  subject: string
  /** What the application email should contain, beyond a resume. */
  sendWith: string
}

export const CAREERS_EMAIL = 'careers@srplblr.com'

export const jobs: Job[] = [
  {
    id: 'manager-digital-technology-platforms',
    title: 'Manager – Digital Technology & Platforms',
    reportsTo: 'Tech Consultant',
    location: 'Bengaluru, India',
    arrangement: 'Fully in-office for the first 3–6 months; hybrid thereafter',
    experience: '3–5 years',
    education:
      "Bachelor's degree required, preferably in Computer Science, Information Technology, or a related field",
    overview: [
      'Sanctus Redemptor Private Limited (SRPL) is a Bangalore-based technology, media, and publishing company delivering integrated digital solutions across three core verticals — Software & Web Development, Media Production & Content, and Book & Digital Publishing — for NGOs, educational institutions, publishers, and corporates in India and the United States. SRPL also builds and runs a portfolio of platforms including Redacamy (learning & spiritual formation), Redemptio (digital content), Holy Redeemer TV (video & OTT), and Holy Redeemer Voice (podcasts & internet radio).',
      'This role owns the technical backbone of the SRPL digital ecosystem — CMS, LMS, mobile apps, progressive web apps, databases, and the software/hardware ecosystem supporting editing, print, and post-production. It is the technical face of Sanctus Redemptor to clients and partners across India and the US, and the primary point of coordination with technical departments across Redemptorist provinces.',
    ],
    responsibilities: [
      'Own and maintain srplblr.com and its supporting CMS, LMS, and database infrastructure.',
      "Support development and operations of SRPL's platform portfolio — Redacamy (LMS & formation), Redemptio (digital content), Holy Redeemer TV (OTT), and Holy Redeemer Voice (podcasts/radio).",
      'Manage and evolve mobile apps and progressive web apps (PWAs) across iOS/Android/web for SRPL and client platforms.',
      'Support the software and hardware ecosystem used for editing, print production, and post-production of media and publishing projects.',
      "Identify, onboard, and manage technical vendors/partners delivering digital solutions on SRPL's behalf.",
      'Serve as the primary technical point of contact for clients across India and the US.',
      'Coordinate with technical departments across Redemptorist provinces to align on shared digital infrastructure and standards.',
      'Troubleshoot, maintain uptime, and continuously improve reliability and security across all platforms.',
      'Evaluate and pilot AI-driven tools that can improve content production, distribution, or platform operations.',
      "Represent SRPL's technology function credibly with partners, clients, and provincial leadership.",
    ],
    mustHave: [
      '3–5 years of full-stack development experience — backend (e.g., Python, Node.js, or PHP) and frontend (e.g., JavaScript/TypeScript with React, Vue, or similar modern frameworks).',
      'Practical experience with CMS platforms (e.g., WordPress) and database management (SQL/NoSQL).',
      'Experience with mobile app and/or progressive web app (PWA) development or oversight.',
      'Comfort coordinating multiple external vendors and non-technical stakeholders simultaneously.',
      'Strong working knowledge of AI tools and the broader AI ecosystem, with the ability to identify practical applications.',
      'Excellent written and verbal communication in English — this is a client- and partner-facing role across India and the US.',
    ],
    niceToHave: [
      'Demonstrable evidence of AI usage in past projects with measurable outcomes.',
      'Familiarity with OTT/streaming platform architecture.',
      'Exposure to print production or editing/post-production software and hardware.',
      'Prior experience in publishing, non-profit, or faith-based media organizations.',
    ],
    subject: 'Application – Manager, Digital Technology & Platforms',
    sendWith: 'your resume and a short note on relevant project experience',
  },
  {
    id: 'digital-content-lead',
    title: 'Digital Content Lead',
    reportsTo: 'Assistant Director',
    location: 'Bangalore, India',
    arrangement:
      'Fully in-office for the first 6 months; hybrid (2–3 days/week in office) thereafter',
    experience: '2–6 years',
    education:
      "Bachelor's degree required; master’s in Marketing, Digital Media, or Communications",
    overview: [
      'This role owns the overall content strategy, growth strategy across generations, and platform architecture for the SRPL digital ecosystem, supporting Redemptorist provinces — Facebook, Instagram, YouTube, OTT, mobile apps, and affiliated websites (Liguori.org, SRPL.com, HRF.org). It directly addresses the current gap in consistent output by building and enforcing a content calendar and playbook, while managing the Content & Community Associate.',
    ],
    responsibilities: [
      'Own the master content calendar across all platforms, aligned to the liturgical calendar and recurring devotional rituals.',
      'Set content strategy segmented by generation (e.g., Facebook/long-form for older audiences, Reels/Shorts/YouTube for younger audiences).',
      'Manage, mentor, and review output from the Content & Community Associate.',
      'Oversee platform architecture: coordinate with IT/dev vendors on website (Liguori.org, SRPL.com, HRF.org), mobile app, and OTT platform updates and issues.',
      'Escalate and personally handle sensitive community management issues (pastoral comments, crisis moments, moderation disputes).',
      'Analyse performance across Meta Business Suite, YouTube Studio, and Google Analytics; report growth, engagement, and audience insights monthly.',
      'Build and document a content playbook so future hires can execute consistently.',
      'Explore and pilot new platforms or formats (e.g., podcast, new Gen Z channels) as the audience strategy matures.',
    ],
    mustHave: [
      '3+ years managing social media/content for a brand, publisher, or institution at meaningful scale.',
      'Strong content strategy and calendar-planning skills — demonstrable track record of consistent output.',
      'Working knowledge of a CMS (e.g., WordPress) and comfort coordinating with technical/IT vendors.',
      'Proficiency with Meta Business Suite, YouTube Studio, Google Analytics, and scheduling tools (Buffer/Hootsuite or similar).',
      'People management or mentoring experience (even informal).',
      'Excellent written and verbal communication in English.',
    ],
    niceToHave: [
      'Meta Blueprint or Google Analytics certification.',
      'Experience with OTT platform administration or mobile app store management (Play Console/App Store Connect).',
      'Familiarity with Redemptorist, Catholic, or broader Christian devotional content and audiences.',
      'Experience using AI content tools for drafting, captioning, or multilingual translation.',
    ],
    subject: 'Application – Digital Content Lead',
    sendWith:
      'your resume, a portfolio or samples of past content/growth work, and a short note on relevant experience',
  },
  {
    id: 'digital-content-community-associate',
    title: 'Digital Content & Community Associate',
    reportsTo: 'Digital Content Lead',
    location: 'Bangalore, India',
    arrangement:
      'Fully in-office for the first 6 months; hybrid (2–3 days/week in office) thereafter',
    experience: '0–2 years',
    education:
      "Bachelor's degree (Mass Communication, Marketing, Journalism, or related field)",
    overview: [
      'This role is responsible for the day-to-day heartbeat of the SRPL digital ecosystem, supporting Redemptorist provinces: producing and publishing content on schedule, and keeping the comment sections across Facebook, Instagram, and YouTube warm, respectful, and pastorally appropriate.',
    ],
    responsibilities: [
      'Execute the content calendar: create and schedule posts, Reels/Shorts, and captions across Facebook, Instagram, and YouTube.',
      'Perform first-line comment moderation: respond to routine comments, flag sensitive prayer requests or problematic comments to the Content Lead, and enforce community guidelines.',
      'Repurpose long-form content (e.g., novena videos, sermons) into short-form clips for multiple platforms.',
      'Maintain a basic content asset library (photos, graphics, video clips, captions) for reuse.',
      'Track basic engagement metrics (likes, comments, shares, views) and report weekly to the Content Lead.',
      "Support light updates to mobile app or website content under the Content Lead's direction.",
    ],
    mustHave: [
      'Working knowledge of Meta Business Suite, Instagram, and YouTube Studio.',
      'Basic photo/video editing (Canva, CapCut, or similar).',
      'Strong written communication in English (additional Indian languages a plus).',
      'Comfortable with high-volume, repetitive publishing and moderation work.',
      'Respectful, culturally sensitive tone appropriate for a religious devotional audience.',
    ],
    niceToHave: [
      "Prior internship or job experience managing a brand's or institution's social media page.",
      'Familiarity with the Catholic liturgical calendar or devotional practices.',
      'Basic use of AI tools for captioning, translation, or first-draft content.',
    ],
    subject: 'Application – Content & Community Associate',
    sendWith: 'your resume and a short note on relevant experience',
  },
]
