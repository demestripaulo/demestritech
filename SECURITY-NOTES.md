# DemestriTech / OrEmet secure static deployment

Upload these files to the project root on GitHub/Vercel.

Security changes included:
- Inline JavaScript moved to `demestritech.js` so CSP can block unknown scripts.
- `vercel.json` adds CSP, clickjacking protection, MIME sniffing protection, referrer policy, permissions policy, and HSTS.
- External portfolio links keep `rel="noopener noreferrer"` when opening new tabs.

Before production, replace the WhatsApp placeholder `seunumero` with the real business number.
