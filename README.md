# generator-2lines-react-h5

> A Yeoman Generator for Quickly Creating React Mobile Applications

English | [简体中文](./README.zh-CN.md)

## Features

- ⚡️ Based on Vite 4.x + React 18 + TypeScript 5
- 🎨 Styling with TailwindCSS 3.x
- 📱 Mobile-first Responsive Design
- 🔧 Integrated PostCSS + pxtorem for Mobile Adaptation
- 📦 Redux Toolkit + Redux Persist State Management
- 🛠️ ESLint + Prettier Code Style Configuration
- 🌐 Axios Request Encapsulation
- 🔍 MSW API Mocking
- 🎁 Integrated ahooks React Hooks Utility Library
- 🔒 Secure and Optimized Build Configuration

## Installation

First, ensure you have [Node.js](https://nodejs.org/) installed (version >= 18).

Then, globally install [Yeoman](https://yeoman.io) and generator-2lines-react-h5:

```bash
npm install -g yo
npm install -g generator-2lines-react-h5
```

Or using pnpm:

```bash
pnpm add -g yo
pnpm add -g generator-2lines-react-h5
```

## Usage

Create a new directory and run:

```bash
yo 2lines-react-h5
```

This will guide you through the project creation process, including:

1. Entering the project name
2. Entering the project description
3. Entering author information

The generator will automatically:

1. Create project directory structure
2. Install required dependencies
3. Configure development environment
4. Set up basic project files

## Project Structure

The generator will create the following directory structure:

```
src/
  ├── api/             # API Interface Definitions
  ├── assets/          # Static Resources
  ├── components/      # Shared Components
  ├── hooks/           # Custom Hooks
  ├── mocks/           # MSW API Mocking
  ├── pages/           # Page Components
  ├── router/          # Routing Configuration
  ├── services/        # API Services
  ├── store/           # Redux State Management
  ├── types/           # TypeScript Type Definitions
  ├── utils/           # Utility Functions
  ├── App.tsx          # Application Root Component
  └── main.tsx         # Entry Point
```

## Scripts

The generated project includes the following npm scripts:

```bash
# Development
pnpm dev

# Build
pnpm build

# Preview
pnpm preview

# Code Linting
pnpm lint

# Code Formatting
pnpm format

# Run Tests
pnpm test
```

## Configuration

The generated project includes the following configuration files:

- `.eslintrc.cjs` - ESLint Configuration
- `.prettierrc` - Prettier Configuration
- `postcss.config.js` - PostCSS Configuration
- `tailwind.config.js` - TailwindCSS Configuration
- `tsconfig.json` - TypeScript Configuration
- `vite.config.ts` - Vite Configuration

## Development

1. Fork this repository
2. Clone your fork locally
3. Install dependencies: `pnpm install`
4. Create a new branch: `git checkout -b feature/your-feature`
5. Commit changes: `git commit -am 'feat: add some feature'`
6. Push to branch: `git push origin feature/your-feature`
7. Submit a Pull Request

## License

[MIT](LICENSE) © 2LinesCraft
