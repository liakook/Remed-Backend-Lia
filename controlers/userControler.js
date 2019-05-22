var db = require('./../database')

module.exports = {
    getFilterUser : (req,res) => {
        var sql = `select * from user where username like 'e%';`
        db.query(sql, (err,result)=> {
            res.send(result)
        })
    },

    addUser : (req,res) => {
        // var data = req.body
        var sql = `insert into user set username = 'Cippirili';`
        db.query(sql,data, (err,result) => {
            if(err) throw err
            res.send('Add User Sukses')
        })
    }
}