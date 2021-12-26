const db = require('../db')

class CategoryTypeContoller {

    async createType(req,res) {
        const {name} = req.body
        const newType = await db.query('INSERT INTO category_type (name) values ($1) RETURNING *', [name])
        res.json(newType.rows)
    }

    async getTypes(req,res) {
        const types = await db.query('select * from category_type')
        res.json(types.rows)
    }

    async getTypeById(req,res) {
        const id = req.params.id
        const type = await db.query('select * from category_type where id=$1', [id])
        res.json(type.rows[0])
    }

    async updateType(req,res) {
        const {id,name} = req.body
        const newType = await db.query('UPDATE category_type set name = $1 where id = $2 RETURNING *', [name,id])
        res.json(newType.rows)
    }

    async deleteType(req,res) {
        const {id} = req.body
        const deleteStatus = await db.query('DELETE from category_type where id = $1 RETURNING *', [id])
        res.json(deleteStatus.rows)
    }
}

module.exports = new CategoryTypeContoller()