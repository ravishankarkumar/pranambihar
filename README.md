# Pranam Bihar

An independent editorial website celebrating Bihar’s culture, heritage, people, history, food, traditions and places.

## Local development

Use Node.js 22.12 or newer (Node.js 24 is used for deployment).

```sh
npm install
npm run dev
```

## Deploying to GitHub Pages

Push to the `main` branch, then choose **GitHub Actions** as the source under **Settings → Pages**. The included workflow builds and deploys the site automatically. The `public/CNAME` file configures `pranambihar.com` as the custom domain.

At your DNS provider, point the apex domain to GitHub Pages’ IP addresses and add a `www` CNAME to `<your-github-username>.github.io`. GitHub will show the exact DNS check status in the repository’s Pages settings.
