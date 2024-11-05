## About this Project
This is a [Next.js](https://nextjs.org) project using [Tailwind CSS](https://tailwindcss.com/) bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
This webpage was created to record my progression as a software developer and portfolio feats I have accomplished, including this project itself.

## Getting Started
A development server for this project can be run using ```npm run dev``` and accessed on localhost:3000
Edits to the page can be made by modifying `app/page.tsx`, which will hot reload on save.

## Note
I culled tailwind.config.js since it created resource pathfinding conflicts with its TS peer file
I downgraded the react and react-dom versions in packages.json since the ```framer-motion``` dependency isn't yet compatible with newer versions of React.js

## Learn More and Miscellaneous
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

To deploy on Vercel:
- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
- Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


