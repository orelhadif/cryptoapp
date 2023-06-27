class UserSymbol {
    constructor (pool) {
        this.pool = pool;
    }

    async add (userId, symbol) {
        await this.pool.execute(`
            insert into users_symbols(user_id, symbol) values(?, ?);
        `, [
            userId, 
            symbol,
        ])
    }
}

module.exports = UserSymbol;