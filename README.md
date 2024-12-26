# mburnayev-website
This webpage was created to record my progression as a software developer and portfolio feats I have accomplished, including this project itself.

## Project Overview
This is a [Next.js](https://nextjs.org) project using [Tailwind CSS](https://tailwindcss.com/) bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). On every update made to the website, the project is rebuilt, deployed, and hosted using Firebase.

## Technologies Used
- Typescript/Javascipt
- HTML + CSS
- Next.JS
- Firebase Hosting
- Google Admin
- Google Cloud Platform
- Oracle Cloud Infrastructure
- Oracle Cloud Compute
- Nginx

## Project Timeline
Task | Notes | Done?
--- | --- | ---
Initialize new Next.JS app | - | ✅
Create foundation for website based on resume | - | ✅
Enable GCP and Crashalytics for my Google organization | - | ✅
Create new Firebase project for hosting | - | ✅
Link codebase to Firebase project | "HTTP Error: 400, Key creation is not allowed on this service account." | ❎
Amend service account key creation policy for my project in GCP | - | ✅
Link codebase to Firebase project | GitHub workflows added as well | ✅
~~Add resume to Firebase~~ | ~~Maybe use Cloud Storage Cloud Storage has been moved to Firebase's Blaze (paid) plan, so I set up a free web server on an Oracle Cloud Compute instance~~ | -
Add link to redirect to my resume ~~on website~~ | Resume included as an app asset, no need for external redirection | ✅
Fill in descriptions for experience | - | ✅
Make UX generally more appealing, fix UI | - | ✅
Test plain website on different browsers (desktop and mobile) | - | ✅
Create switch to turn on the funk | Swapped switch for subtle tooltip on image hover | ✅
~~Copy over existing webpage logic as base for funky version~~ | I thought I'd maybe use page routing for the plain and funky pages, but it was easier to use state management instead| ✅
Rework funky website accordingly | SFX (re)added, BackgroundLines component (re)added (figured out how to use that), flavored text added, funk indicator added | ✅
Test funky website on different browsers (desktop and mobile) | in progress | -
Deploy website | - | ✅
Fix website deployment | It's publicly available, but I get an incompatible Node version error? | ✅
Add vanity URL | Should go up before New Year's Eve | ✅
Add mobile broswer support | - | ✅

## Miscellaneous
A development server for this project can be run using `npm run dev` and accessed on localhost:3000

Edits to the page can be made by modifying `app/page.tsx` which will hot reload on save.

I culled tailwind.config.js since it created resource pathfinding conflicts with its peer TS file
I downgraded the react and react-dom versions in packages.json since the framer-motion dependency isn't yet compatible with newer versions of React.js

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
