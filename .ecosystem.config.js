module.exports = {
  apps: [
    {
      name: "next-app",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
