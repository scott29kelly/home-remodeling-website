# Scott Romanoski Construction — Website

**Client:** Scott Romanoski Construction
**Location:** Langhorne, PA 19047
**Status:** In Development
**Built by:** Kelly Digital LLC

---

## Project Overview

Professional website for a licensed PA/NJ remodeling contractor with 18+ years
experience and zero existing web presence. Built as a portfolio/case study
project — pro bono in exchange for portfolio credit and referral consideration.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Database (future):** Supabase
- **Auth (future):** Supabase Auth

## Roadmap

### V1 — Public Site (current)
- [x] Project scaffolding and component architecture
- [ ] Receive project photos from client
- [ ] Receive/collect client testimonials
- [ ] Confirm full service list and service area
- [ ] Replace all placeholder content with real copy/images
- [ ] Configure contact form submission (email delivery)
- [ ] Domain registration and DNS setup
- [ ] Google Business Profile setup
- [ ] On-page SEO pass (meta tags, schema markup, sitemap)
- [ ] Performance audit (Lighthouse 90+)
- [ ] Client review and launch

### V2 — Admin Dashboard
- [ ] Supabase project setup (database + auth)
- [ ] Admin authentication (login/logout)
- [ ] Portfolio management (upload/edit/delete/reorder project photos)
- [ ] Contact form submissions viewer (inbox-style)
- [ ] Testimonial management (add/edit/publish/unpublish)
- [ ] Basic site analytics integration

### V3 — Enhancements
- [ ] Blog/content section (SEO play for local search)
- [ ] Before/after photo slider component
- [ ] Project detail pages (individual case studies)
- [ ] Review generation system (automated follow-up emails to past clients)
- [ ] Lead tracking / simple CRM
- [ ] Automated email notifications for new form submissions

## Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── admin/           # V2: dashboard routes
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Services, About, Portfolio, etc.
│   └── ui/              # Reusable components (Button, Card, ScrollReveal)
├── lib/
│   ├── constants.ts     # All site content (single source of truth)
│   └── utils.ts
└── types/
    └── index.ts
```

## Content Architecture

All display content lives in `lib/constants.ts` so it can be swapped to
database-driven content in V2 without touching components.

## Client Info

| Field | Value |
|-------|-------|
| Business | Scott Romanoski Construction |
| Owner | Scott Romanoski |
| Address | 710 Parker St, Langhorne, PA 19047 |
| Phone | (215) 519-1795 |
| Email | sroman2@verizon.net |
| Entity | Sole Proprietorship |
| Established | June 2007 |
| PA License | PA012701 |
| BBB Rating | A+ (zero complaints) |
| Certifications | Certified Bilco Installer |
| Services | Remodeling, additions, decks, patios, Bilco, general contracting |
| Service Area | Bucks County PA, South Jersey |

## License

Private client project. Not open source.
