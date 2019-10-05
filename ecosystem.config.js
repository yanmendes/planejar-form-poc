module.exports = {
  apps: [
    {
      name: 'planejar-form-poc',
      script: 'PORT=4001 npm run start:prod',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 4001
      }
    }
  ]
}
