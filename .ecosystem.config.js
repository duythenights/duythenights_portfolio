module.exports = {
  apps: [
    {
      name: "duythenights_portfolio",
      script: "npm",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
