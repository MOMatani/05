

const { error } = require('console')


const { getAllAdmins}=require('../conn/admin')
getAllAdmins()
.then(Admin=>{
    console.log(Admin)
})
.catch(err=>{
    console.log(err)
})
/*
/////////////////////////////////////////////////////////////
//ID
const { getAdminByID}=require('./conn/admin')
getAdminByID()
.then(Admin=>{
    console.log(Admin)
})
.catch(err=>{
    console.log(err)
})
///////////////////////////////////////////////////////////////
//ADD
const { addAdmin}=require('./conn/admin')
addAdmin()
.then(Admin=>{
    console.log(Admin)
})
.catch(err=>{
    console.log(err)
})
////////////////////////////////////////////////////////////////////
//UPDATE
const { UpdateAdmin}=require('./conn/admin')
UpdateAdmin()
.then(Admin=>{
    console.log(Admin)
})
.catch(err=>{
    console.log(err)
})
////////////////////////////////////////////////////////////////////
//REMOVE
const { removeAdmin}=require('./conn/admin')
removeAdmin()
.then(Admin=>{
    console.log(Admin)
})
.catch(err=>{
    console.log(err)
})
/////////////////////////////////////////////////////////////////////
//USER_NAME 
const { getAdminByUserName}=require('./conn/admin')
getAdminByUserName()
.then(Admin=>{
    console.log(Admin)
})
.catch(err=>{
    console.log(err)
})


*/

