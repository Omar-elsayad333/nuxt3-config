module.exports = {
  apps: [
    {
      name: 'aljoodmed-w',
      exec_mode: 'fork',
      instances: 1,
      script: './.output/server/index.mjs',
      args: 'start',
      env: {
        NODE_ENV: 'production',

        PORT: 35000,
      },
    },
  ],
}
