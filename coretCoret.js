// User : id, username
// Todo : id, content, hari, id_user

// Route API :
// 1. Add User -> /addUser , addUser
// 2. Get All Todo -> /getTodo , getAllTodo
// 3. Get Todo Filter by User -> /filterUser , getFilterUser
// 4. Get Todo Filter by hari -> /filterHari , getFilterHari
// 5. Add Todo -> /addTodo , addTodo
// 6. Delete Todo -> /delete/:id , deleteTodo

// ===============

// router.get('/filter' , (req,res) => {
//     var nama = req.query.nama
//     var pclass = req.query.pclass
//     var sql = ''
//     if(nama){
//         sql = `select * from data where Name like '${nama}%'`
//     }
//     if(pclass){
//         sql = `select * from data where Pclass = '${pclass}'`
//     }
//     if(pclass && nama){
//         sql = `select * 
//                from data 
//                where Name like '${nama}%' and 
//                Pclass = '${pclass}'`
//     }
//     conn.query(sql , (err,result) => {
//         if(err) throw err
//         res.send(result)
//     })
// })

// table todo.id, table user -> username, todo from todo
// join table user on id_user(from todo) = table user.id

/**
 select todo.id, username, content, hari from todo 
 join user on id_user = user.id;
  
 */
