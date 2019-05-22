const db = require('./../database')

module.exports = {
    addTodo : (req,res) => {
        // REQ.BODY BUAT AMBIL DATA DARI FRONT END
        // console.log(req.body)
        var sql = `insert into todo (content, hari, id_user) values ('Kick Boxing', 'Minggu', 8);`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
            })
    },

    deleteTodo : (req,res) => {
        // var id = req.params.id
        var sql = `DELETE FROM todo WHERE id=4`
        db.query(sql,(err,result) => {
            if(err) throw err
            res.send(result)
        })
    },
    getAllTodo : (req,res) => {
        var sql = `select todo.id, username, content, hari from todo 
        join user on id_user = user.id;`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },
    getFilterHari : (req,res) => {
        var sql = `select * from todo where hari like 'r%';`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    }
}


// editTodoById : (req,res) => {
//     var id = req.params.id
//     var data = req.body.todo
//     var sql = `UPDATE to_do
//                SET to_do = ?
//                WHERE id = ${id};`
//     db.query(sql ,data, (err,result)=>{
//         try{
//             if(err) throw err.message
//             var sql2 = `select to_do.id, username, to_do from to_do
//                         join users on id_user = users.id;`
//             db.query(sql2, (err,result1) => {
//                 if(err) throw err
//                 res.send(result1)
//             })
//             // res.send('berhasil di update')
//         }catch(err){
//             res.send(err)
//         }
        
//     })
// },
