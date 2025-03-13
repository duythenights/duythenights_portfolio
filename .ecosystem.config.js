module.exports = {
  apps: [
    {
      name: "portfolio_3000",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
