
# My Website

## Project Overview

This project is currently running on **Version 2 (v2)**.

### Version History

- **v1:** The Experience section was quite large, with all content on a single page.
- **v2:** The Experience section has been moved to a separate route to improve structure and navigation. This is the current version.

### Future Development

- **v3:** Improvements to the existing v2:
  - Previous and Next navigation buttons
  - Password protection
  - Google Tag Manager (GTM) integration
  - Sitemap implementation
  - Other UI/UX improvements

- **v4:** Introduction of a dedicated Posts section.

## Development

```bash
npm install
npm start
open http://localhost:3000
```

## Tech Stack

- Node.js
- Express.js
- Markdown-it

## Production (Heroku Deployment Guide)

These commands are used to deploy your website on Heroku and open the deployed website.

### 1. What does `git push heroku master` do?

- Pushes your local project code to Heroku.
- Heroku reads your `package.json` and `Procfile`.
- Installs the required dependencies.
- Runs the application according to the `Procfile`.
- Deploys your website.

### 2. What does `heroku open` do?

- Opens your deployed website in the browser.
- It works after successful deployment.

### 3. Steps to Deploy on Heroku

#### Step 1: Create a Heroku Account

Visit [Heroku](https://www.heroku.com/) and create an account.

#### Step 2: Install Heroku CLI

Follow the [Heroku CLI Installation Guide](https://devcenter.heroku.com/articles/heroku-cli).

#### Step 3: Login to Heroku

```bash
heroku login
```

#### Step 4: Create a Heroku App

```bash
heroku create your-app-name
```

#### Step 5: Verify Heroku Remote

```bash
git remote -v
```

#### Step 6: Deploy Your Application

For the `master` branch:

```bash
git push heroku master
```

If your branch is `main`:

```bash
git push heroku main:master
```

#### Step 7: Open Your Deployed Website

```bash
heroku open
```

### 4. Important Notes

- Ensure that `Procfile` is configured correctly.
- Ensure that `package.json` contains a valid `start` script.
- Use `process.env.PORT` in `server.js`.
- Verify environment variables before deployment.
- Make sure your Git repository is properly configured.

### 5. Production Deploy Commands (Quick Reference)

```bash
heroku login
heroku create your-app-name
git remote -v
git push heroku master
heroku open
```
