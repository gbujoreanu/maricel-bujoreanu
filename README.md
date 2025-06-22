# Maricel Bujoreanu Portfolio

This repository contains the source code for Maricel Bujoreanu's portfolio website. The site can be served as a static site or run from an Express server once Node.js dependencies are added.

## Getting Started

1. **Install Node.js**
   - Download the latest LTS version from [nodejs.org](https://nodejs.org/) and follow the installation instructions for your operating system.
   - Alternatively, you can use a version manager such as `nvm` to install and manage Node versions.

2. **Install dependencies**
   - In the project directory run:

     ```bash
     npm install
     ```

     This will install the packages listed in `package.json` once the project uses Node/Express.

3. **Start the local server**
   - After installing dependencies, start the Express server with:

     ```bash
     npm start
     ```

    - The site will be available at `http://localhost:3000` by default.

## Contact Form Email Setup

The contact form now uses [Nodemailer](https://nodemailer.com/) to forward
messages. Create a `.env` file in the project root with your mail service
credentials:

```env
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=465
EMAIL_SECURE=true        # true for port 465, false for 587
EMAIL_USER=your_account@example.com
EMAIL_PASS=your_password
EMAIL_TO=destination@example.com
```

Start the server after configuring these variables and form submissions will be
emailed to `EMAIL_TO`.

## Deployment

When the portfolio is served using Express, you can deploy it to a hosting provider such as [Heroku](https://www.heroku.com/) or another Node-friendly host.

A typical deployment flow for Heroku is:

```bash
git init                          # if you haven't already
git add .
git commit -m "Prepare for deploy"
heroku create                     # creates a new Heroku app
git push heroku main              # deploys your code
```

Refer to your chosen provider's documentation for environment variables and configuration steps.
