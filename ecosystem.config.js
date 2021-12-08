module.exports = {
  apps : [
      {
        name: "app",
        script: "./server.js",
        watch: true,
        env: {
            "PORT": 4000,
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
        }
      }
  ]
}

