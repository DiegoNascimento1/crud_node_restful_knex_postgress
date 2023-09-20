module.exports = {
    development: {
        client: 'pg',
        connection: { filename: './db'},
        migrations: {
            directory: './db/migrations',
            tableName: 'migrations'
        },
        seeds: {
            directory: './db/seeds',
        }
    }
}