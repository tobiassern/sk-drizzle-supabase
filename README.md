# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Setting up project
- Create a supabase database
- Use the migration file in ./drizzle to populate Supabase
- Create .env file locally if you want to run it locally and add DATABASE_URL with the supabase connection string
- Deploy to GIT
- Create a new Cloudflare Pages application and connect to your new git repo
- Add the DATABASE_URL as an environment variable

### Error


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
