module.exports = {
  apps: [
    {
      name: 'planejar-form-poc',
      script: 'npm run start:prod',
      watch: true,
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
