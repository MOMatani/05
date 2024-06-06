

const { error } = require('console')
const{pool} = require('./db2')
const { promises } = require('dns')
const { resolve } = require('path')
const { rejects } = require('assert')


const getAllAirlineCompanies=()=>{
    return new Promise((resolve , reject)=>{
        pool.query('SELECT * FROM flights_projact.airline_comoanies;',(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////
const getAirlineById=(id)=>{
    return new Promise((resolve , reject)=>{
        pool.query('SELECT * FROM airline_comoanies WHERE id = ?', [id],(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
const addAirLine=(name, user_name, password)=>{
    return new Promise((resolve , reject)=>{
        pool.query('INSERT INTO airline_comoanies (name, user_name, password) VALUES (?, ?, ?)', [name, , user_name, password],(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
const UpdateAirLine=(name,  username, password, id)=>{
    return new Promise((resolve , reject)=>{
        pool.query('UPDATE airline_comoanies SET name = ?, user_name = ?, password = ? WHERE id = ?', [name,  username, password, id],(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
const removeAirLine =(id)=>{
    return new Promise((resolve , reject)=>{
        pool.query('DELETE FROM airline_comoanies WHERE id = ?', [id],(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const getAirLineByUserName=(username)=>{
    return new Promise((resolve,rejects)=>{
        pool.query('SELECT * FROM airline_comoanies WHERE user_name = ?', [username] , (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
         
        })
      
    })
}
module.exports={
    getAirLineByUserName,
    removeAirLine,
    UpdateAirLine,
    addAirLine,
    getAirlineById,
    getAllAirlineCompanies
}
/*
const getAllAirlineCompanies = async () => {
    const [rows] = await pool.execute('SELECT * FROM flights_projact.airline_comoanies;');
    return rows;
  };
  
  const getAirlineById = async (id) => {
    const [row] = await pool.execute('SELECT * FROM airline_comoanies WHERE id = ?', [id]);
    return row;
  };
  
  const addAirline = async ({ name, username }) => {
    const [result] = await pool.execute('INSERT INTO airline_comoanies (name, user_name) VALUES (?, ?)', [name, username]);
    return result.insertId;
  };
  
  const updateAirline = async (id, { name, username }) => {
    const result = await pool.execute('UPDATE airline_comoanies SET name = ?, user_name = ? WHERE id = ?', [name, username, id]);
    return result.affectedRows;
  };
  
  const removeAirline = async (id) => {
    const result = await pool.execute('DELETE FROM airline_comoanies WHERE id = ?', [id]);
    return result.affectedRows;
  };
  
  const getAirlineByUsername = async (username) => {
    const [row] = await pool.execute('SELECT * FROM airline_comoanies WHERE user_name = ?', [username]);
    return row;
  };
  
  module.exports={
    getAllAirlineCompanies,
    getAirlineById,
    addAirline,
    updateAirline,
    removeAirline,
    getAirlineByUsername
  }


*/
