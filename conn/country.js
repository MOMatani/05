

const { name } = require('ejs');
const{pool} = require('./db2');

const getAllCountry=()=>{
    return new Promise((resolve , reject)=>{
        pool.query('SELECT * FROM flights_projact.country;',(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const getCountryByID= (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM country WHERE id = ?', [id],(error,resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
const addCountry =(name,  id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('INSERT INTO country (name, id) VALUES (?, ?, ?)', [name, , id],(error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
const UpdateCountry =(name,   id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('UPDATE country SET name = , WHERE id = ?', [name,   id] , (error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        } )
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////
const removeCountry =(id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('DELETE FROM country WHERE id = ?', [id], (error ,resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
        })
    })
}

const getCountryByname =(name)=>{
    return new Promise((resolve,rejects)=>{
        pool.query('SELECT * FROM country WHERE NAME = ?',[name],(error,resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
        })
    })
}
module.exports={
    removeCountry,
    getAllCountry,
    UpdateCountry,
    addCountry,
    getCountryByID,
    getCountryByname
}

