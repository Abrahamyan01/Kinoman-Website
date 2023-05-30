module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/components/comments/comment.tsx",
      "!**/node_modules/**",
      "!**/.storybook/**",
      "!**/jest.config.js",
      "!**/next-env.d.ts ",
      "!**/.next/**",
      "!**/next.config.js",
      "!**/babel.config.js",
    ],
};