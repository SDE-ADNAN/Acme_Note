# README For All Neccessary Info.

Deployed on https://acme-note.netlify.app

---
### A basic overview of your project.
- Project is all about a web based note-taking application.
- project has 5 sections namely:-
  - Hero Section with tagline and banner image.
  - AboutSec with some desciptive text.
  - IpadSec as ipads with apple pencil are most versatile devices for note-taking
  - Compatibility section as being a webapp acme note is compatible on nearly every device that can run a browser.
---
### The framework you chose, along with any major plugins or packages you installed.

- Framework used in this project is `Reactjs v18.2.0`.
- Used `Vite + yarn` for devlopment. As this combo is blasing fast as compared to `CRA(Create-React-App)`.
- Used `GSAP3/GreenSock3` as an animation engine ( its paid for some internal plugins but gives awesome plugins like `scrollTrigger` for free which simply is the best.).Its really great at optimizing its animations context which makes the animations look really awesome.
- Used `TailwindCSS` for its utility classes , as writing whole css would have resulted in bigger bundle size as using `tailwind with webpack` allows us to take advantage of `Tree Shaking` where unused css is removed while making optimized build. And less bundle size results into fast load times.

---
### The page load time of your landing page, and how you measured this time.

Before doing anything and using best practices my load time measured using lighthouse tool is as follows.
- Performance is at --> `95%`.
  - Performance metrices are as below.
    - FCP (First Contentful Paint) is at --> `1.4sec`.
    - Speed Index is at --> `1.9sec`.
    - LCP (Largest Contentful Paint) is at --> `2.4sec`.
    - Time to Interactive is at --> `1.6sec`.
    - TBT (Total Blocking Time) is at --> `190ms`.
    - Cumulative Layout Shift is at --> `0.043`.
- Accessibility is at --> `75%`.
- Best Practices is at --> `92%`.
- SEO is at --> `83%`.
- PWA ( Progressive Web App ) - `none`.
---

### Any optimizations you did to decrease the load time or increase page performance.

#### Step1 making all images into webp images. ( Affected Performance metric ).
- Performance is at --> `97%`.`( 2% optimized )`
  - Performance metrices are as below.
    - FCP (First Contentful Paint) is at --> `1.4sec`.
    - Speed Index is at --> `1.9sec`.
    - LCP (Largest Contentful Paint) is at --> `1.7sec`. `(29.2% optimized )`
    - Time to Interactive is at --> `1.6sec`.
    - TBT (Total Blocking Time) is at --> `190ms`.
    - Cumulative Layout Shift is at --> `0.043`.

### step2 making all images available through CDN. 
- Performance is at --> `97%`.
  - Performance metrices are as below.
    - FCP (First Contentful Paint) is at --> `1.4sec`.
    - Speed Index is at --> `1.9sec`.
    - LCP (Largest Contentful Paint) is at --> `1.7sec`.
    - Time to Interactive is at --> `1.6sec`.
    - TBT (Total Blocking Time) is at --> `70ms`.` 63% optimized `
    - Cumulative Layout Shift is at --> `0.043`.

### working on accessibility metric as its at 75%.
- 

