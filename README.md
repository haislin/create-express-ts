
# Create-Express-TS

Create-Express-ts is a package that provides a template for a Node.js Express server using TypeScript. It includes features such as CORS support, rate limiting, code styling enforcement, and automatic server restart in development mode. The package is easy to install and use, and can be easily configured to fit your specific needs. With this template, you can quickly set up a new Express server with best practices and modern tools already in place.


## Installation

Install with npx

```bash
  npx @haislin/create-express-ts@latest my-project
  cd my-project
```

Manual Installation

```bash
  git clone https://github.com/haislin/create-express-ts.git my-project
  cd my-project
  npm install
```
## Usage


1. Start the development server

```bash
npm run dev
```

2. Build the project

```bash
npm run build
```

3. Start the production server

```bash
npm start
```



## Features

- Node.js Express server using TypeScript
- CORS support using the cors package
- Rate limiting using the express-rate-limit package
- Code styling enforced using ESLint and Prettier (configured to follow Airbnb's style guide)
- Automatic server restart in development mode using Nodemon

