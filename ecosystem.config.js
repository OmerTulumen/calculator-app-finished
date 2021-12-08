module.exports = {
  apps : [
      {
        name: "myapp",
        script: "./server.js",
        watch: true,
        env: {
            "PORT": 3800,
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
        }
      }
  ]
}
