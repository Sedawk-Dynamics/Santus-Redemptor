import { ADDRESS, LEGAL_NAME, SITE_NAME, SITE_URL } from '@/lib/site'
import type { Job } from './jobs'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const list = (title: string, items: string[]) =>
  `<p><strong>${esc(title)}</strong></p><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`

/* Google Jobs wants the full description, as HTML, on the role's own page. */
function descriptionHtml(job: Job) {
  return [
    ...job.overview.map((p) => `<p>${esc(p)}</p>`),
    list('Key responsibilities', job.responsibilities),
    list('Must-have skills', job.mustHave),
    list('Nice to have', job.niceToHave),
    `<p><strong>Work arrangement:</strong> ${esc(job.arrangement)}</p>`,
    `<p><strong>Reports to:</strong> ${esc(job.reportsTo)}</p>`,
  ].join('')
}

export const jobUrl = (job: Job) => `${SITE_URL}/careers/${job.id}`

/* JobPosting for one role. Goes only on /careers/[id]: Google's guidelines
   say not to put JobPosting markup on a page that lists several jobs. */
export function jobPostingLd(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: descriptionHtml(job),
    identifier: { '@type': 'PropertyValue', name: LEGAL_NAME, value: job.id },
    datePosted: job.datePosted,
    url: jobUrl(job),
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: LEGAL_NAME,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', ...ADDRESS } },
    ...(job.remote && { jobLocationType: 'TELECOMMUTE' }),
    applicantLocationRequirements: { '@type': 'Country', name: 'India' },
    directApply: false,
    educationRequirements: job.education,
    ...(job.experience && { experienceRequirements: job.experience }),
    industry: 'Technology, media and publishing',
  }
}

type Crumb = { name: string; path: string }

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: SITE_NAME, path: '' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  }
}

/* The /careers listing points search engines at each role's page. */
export function jobListLd(jobs: Job[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Open positions at ${LEGAL_NAME}`,
    itemListElement: jobs.map((job, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: jobUrl(job),
      name: job.title,
    })),
  }
}
