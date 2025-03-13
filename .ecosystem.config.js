module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
