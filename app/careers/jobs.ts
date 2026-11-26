export type Job = {
  id: string
  title: string
  reportsTo: string
  location: string
  arrangement: string
  /** Omit when the role does not state a number of years. */
  experience?: string
  education: string
  /** Mostly or fully remote: marked as telecommute for Google Jobs. */
  remote?: boolean
  overview: string[]
  responsibilities: string[]
  mustHave: string[]
  niceToHave: string[]
  /** "What you'll get" bullets, shown when present. */
  benefits?: string[]
  /** Extra application guidance, shown under "How to apply". */
  applyNotes?: string[]
  /** Subject line applicants are asked to use. */
  subject: string
  /** What the application email should contain, beyond a resume. */
  sendWith: string
  /** ISO date the role was posted. Required by Google Jobs. */
  datePosted: string
}

export const CAREERS_EMAIL = 'careers@srplblr.com'

/* Newest roles go first: the careers page lists them in this order. */
export const jobs: Job[] = [
  {
    id: 'social-media-digital-platform-manager',
    title: 'Social Media and Digital Platform Manager',
    reportsTo: 'Director of Liguori Media',
    location: 'Mostly remote — US shift, 6:00 PM to 3:00 AM IST',
    arrangement: 'Mostly remote; US shift, 6:00 PM to 3:00 AM IST',
    education:
      'Relevant education, professional training, or an equivalent combination of practical experience and demonstrated work. A particular degree is not required.',
    remote: true,
    overview: [
      'Run day-to-day social media and digital publishing across client accounts, with accuracy, judgement and follow-through.',
      'Liguori Publications (LP) is a nonprofit Catholic publisher and a Redemptorist ministry serving people through print and digital resources. This position supports the online presence of LP and the Redemptorist ministries whose digital communications are managed by Liguori Media. Your work will help these ministries share useful, faithful and engaging content with the people they serve.',
      'This position owns content operations and channel execution. You will be comfortable moving between distinct ministry voices while protecting each account’s identity and keeping deadlines, permissions and content details straight. The Marketing Promotions and Campaigns Manager owns LP’s integrated marketing strategy, and the two roles collaborate on campaign delivery.',
      'First 30 days: review assigned accounts, audiences, content practices, access and approval requirements, and identify immediate publishing or workflow risks. By 60 days: establish a usable shared calendar, asset organisation, publishing checklist and escalation process. By 90 days: maintain a dependable publishing rhythm across assigned accounts and deliver the first comparative content-performance review.',
      'Routine content administration is included. Software development, full IT administration and final theological approval fall outside the scope of this role.',
    ],
    responsibilities: [
      'Content calendars and coordination: maintain a shared editorial and publishing calendar with clear account ownership, deadlines, approvals and publication status. Gather content from ministry contacts, editors, authors and approved contributors, follow up on missing assets, and keep organised records of approved copy, media, permissions and reusable assets.',
      'Content preparation and publishing: write, edit and adapt approved material into platform-appropriate posts, captions and video descriptions. Schedule and publish across approved channels, checking dates, links, tags, image crops and captions. Apply accessibility measures such as meaningful alt text and accurate video captions, and confirm permissions and credits before using contributed material.',
      'Community care and channel stewardship: monitor comments and messages during the agreed coverage schedule and respond using approved guidance. Route product questions to customer service, and pastoral, sensitive or theological questions to designated contacts. Escalate complaints, concerning content and suspected account compromise, and keep to approved access and security practices.',
      'Reporting and workflow improvement: track measures suited to each ministry’s objectives, such as meaningful engagement, reach, video viewing and website referrals, and separate platform reporting from confirmed outcomes. Build checklists that reduce missed approvals and publishing errors, and use approved automation or AI tools with human approval before anything is published.',
    ],
    mustHave: [
      'Demonstrated experience managing social-media content or digital publishing for an organisation, ministry, business or comparable sustained project.',
      'Strong organisational skills, with evidence of managing calendars, assets, approvals and deadlines across multiple accounts or workstreams.',
      'Current familiarity with major social platforms and the ability to adapt content to different formats, audiences and channel requirements.',
      'Clear, accurate writing and editing skills, sound judgement about tone, and close attention to detail before content goes live.',
      'Working knowledge of Catholic faith, terminology, practices and the liturgical calendar, sufficient to prepare appropriate content and recognise when specialist review is needed.',
      'Respect for, and willingness to support, LP’s Catholic and Redemptorist mission in professional work.',
      'Ability to use scheduling, content-management, basic creative and analytics tools, or transferable experience and readiness to learn the organisation’s systems.',
      'Willingness to train in new tools and workflows, including approved AI and automation, even if prior experience is limited.',
      'Reliable independent work habits and clear communication with colleagues and ministry contacts during agreed working hours.',
      'Relevant education, professional training, or an equivalent combination of practical experience and demonstrated work. A particular degree is not required.',
    ],
    niceToHave: [
      'Experience with Catholic or other mission-driven communications, publishing, parish or diocesan communications, or nonprofit ministry.',
      'Experience coordinating distinct brands or ministry accounts and working with several content contributors.',
      'Basic photography, image editing, short-form video editing, captioning or accessible-content production skills.',
      'Experience with a website content-management system, social scheduling tools, digital asset libraries and analytics. Specific vendors are not required.',
      'Experience using automation or AI responsibly to improve content workflows while maintaining editorial control.',
      'Experience handling community inquiries and escalating sensitive matters appropriately.',
    ],
    benefits: [
      'Close collaboration with LP marketing, editorial and design colleagues, customer service, and designated Redemptorist ministry contacts.',
      'Clear escalation routes and approved guidance for community responses and sensitive matters.',
    ],
    subject: 'Social Media and Digital Platform Manager',
    sendWith:
      'your résumé, a brief explanation of your interest in this work, and two or three examples of organisational social-media or digital content',
    applyNotes: [
      'If available, include a redacted content calendar, workflow example, or brief account of how you improved results.',
      'Use public links or redacted samples only. Do not disclose private messages, customer information or confidential ministry material.',
      'We review applications on a rolling basis and respond to everyone.',
    ],
    datePosted: '2026-11-26',
  },
  {
    id: 'marketing-promotions-campaigns-manager',
    title: 'Marketing Promotions and Campaigns Manager',
    reportsTo: 'Director of Liguori Media',
    location: 'Mostly remote — US shift, 6:00 PM to 3:00 AM IST',
    arrangement: 'Mostly remote; US shift, 6:00 PM to 3:00 AM IST',
    education:
      'Relevant education, professional training, or an equivalent combination of practical experience and demonstrated results. A particular degree is not required.',
    remote: true,
    overview: [
      'Lead hands-on marketing and sales promotions that help our Catholic print and digital resources reach readers, parishes, dioceses and other institutions.',
      'Liguori Publications is a Catholic publisher and ministry of the Redemptorists. Through print and digital resources, we help people grow in faith and support the educational and pastoral work of the Church. We are seeking a hands-on marketing professional who understands this mission and can help our publications reach the individuals, parishes, dioceses and other Catholic institutions that need them.',
      'This role leads integrated marketing and sales-promotion planning for LP’s print and digital publishing business, turning audience insight, publishing priorities and sales results into practical campaigns. It is a working manager role: strategic planning is paired with campaign development, copywriting, coordination, testing and performance analysis. The role owns marketing campaign strategy and commercial performance analysis, and works with the Social Media and Digital Platform Manager, who owns day-to-day social publishing.',
      'First 30 days: learn LP’s products, audiences, mission, workflows and available data, meet key collaborators, review current campaigns, and agree the most important opportunities and measurement gaps. By 60 days: present a prioritised marketing and sales-promotion plan with audiences, calendar, resources, success measures and a manageable testing agenda. By 90 days: launch or improve agreed priority campaigns, establish a practical reporting rhythm, and present early findings. Success is judged against agreed baselines and available evidence, not unsupported short-term revenue promises.',
      'Campaign spending and vendor commitments are subject to approved budgets and authorisation.',
    ],
    responsibilities: [
      'Marketing and sales promotion planning: develop an integrated marketing calendar aligned with launches, customer needs, the liturgical year, faith-formation cycles and parish and institutional purchasing timelines. Recommend priorities, audiences, positioning, channel mix, offers and budgets for leadership approval. Identify new ways to reach readers, parish leaders, ministry staff, diocesan offices and other institutional buyers.',
      'Hands-on campaign development: write campaign briefs, promotional copy, email content, landing-page messaging and sales-support materials. Coordinate creative production, approvals and launch readiness with editorial, design, sales, customer service and digital colleagues. Keep pricing, availability, offer terms and calls to action consistent across channels, and manage vendor work within approved budgets.',
      'Measurement and continuous improvement: establish campaign baselines and dashboards from sales, email, website and e-commerce data. Evaluate campaign-attributed sales, conversion, retention, email engagement, repeat purchase and return on marketing spend where the data supports it, and be clear about what the data does and does not show. Run proportionate tests and recommend what to continue, adjust, stop or test next.',
      'Mission stewardship and collaboration: keep a respectful, accurate voice for Catholic audiences and seek editorial or theological review when needed. Coordinate priorities and deadlines across teams, use approved marketing technology and AI tools with human review, and protect customer and organisational information.',
    ],
    mustHave: [
      'Demonstrated hands-on experience planning, delivering and evaluating integrated marketing campaigns and sales promotions for a US audience, with substantive experience in publishing, books, educational resources or closely related content products.',
      'Working knowledge of print and digital marketing, including email, websites or e-commerce, promotional copy, audience segmentation and campaign measurement.',
      'Ability to translate sales and audience data into clear decisions and realistic action plans, rather than reporting activity alone.',
      'Strong writing, editing, project-management and organisational skills, with evidence of managing several deadlines and stakeholders without losing attention to detail.',
      'Understanding of Catholic institutions, including dioceses and parishes, and how their pastoral, educational and purchasing needs affect marketing.',
      'Appreciation of LP’s Catholic and Redemptorist mission and the ability to represent it accurately and respectfully in professional work.',
      'Confidence learning and using current digital tools, with willingness to adopt approved AI and automation tools.',
      'Ability to work independently and collaborate reliably across teams during agreed working hours.',
      'Relevant education, professional training, or an equivalent combination of practical experience and demonstrated results. A particular degree is not required.',
    ],
    niceToHave: [
      'Marketing or sales-promotion experience with Catholic publishing, faith formation, religious education, nonprofit ministry or institutional purchasing.',
      'Experience with publication launches, seasonal campaigns, direct mail or catalogues, customer retention and print-to-digital customer journeys.',
      'Experience with email or CRM systems, content-management or e-commerce platforms, analytics and paid-media tools. Specific vendors are less important than transferable skills and sound judgement.',
      'Experience introducing useful automation or AI-assisted workflows, including checking outputs and documenting safe, repeatable processes.',
      'Experience coordinating vendors or agency partners and monitoring an approved marketing budget.',
    ],
    benefits: [
      'Close collaboration with leadership, sales and customer service, editorial, design, and the Social Media and Digital Platform Manager.',
      'Campaign ownership and approval steps agreed with collaborators from the outset.',
    ],
    subject: 'Marketing Promotions and Campaigns Manager',
    sendWith:
      'your résumé, a brief explanation of your interest in Liguori Publications’ mission, and two or three relevant campaign examples',
    applyNotes: [
      'For each example, explain your role, the objective, the channels used, and the results or lessons learned. Public or appropriately redacted examples are welcome.',
      'Do not share confidential customer information or proprietary material without permission.',
      'We review applications on a rolling basis and respond to everyone.',
    ],
    datePosted: '2026-11-26',
  },
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
    datePosted: '2026-10-05',
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
    datePosted: '2026-10-05',
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
    datePosted: '2026-10-05',
  },
]
