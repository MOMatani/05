const express = require('express')
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port =2002;
const customer = require('./conn/customers')

const SECRET = 'This is my secret key'
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.set('view engine', 'ejs')


const {getAirLineByUserName , getAirlineById , getAllAirlineCompanies ,  removeAirLine , addAirLine ,UpdateAirLine} = require('./conn/airlineComoanies')
const {GetAllCustomers,getCustomerById,getCustomerByUserName,removeCustomer,addCustomer,UpdateCustomer, getTicketsByUserName}= require('./conn/customers')
const{getAdminByID,getAllAdmins,getAdminByUserName,UpdateAdmin,removeAdmin,addAdmin}=require('./conn/admin')
const{getAllCountry,getCountryByID,removeCountry,addCountry,UpdateCountry,getCountryByname}=require('./conn/country')
const{getAllTickets,getTicketsByUserID,getTicketsByID,addTickets,removeTickets,UpdateTickets}=require('./conn/tickets')
const{ getAllflights , UpdateFlights , removeFlight}=require('./conn/flights');
const { pool } = require('./conn/db2');
/*
app.get('/api/customers', (req, res) => {
  GetAllCustomers()
    .then(customers => {
      res.json(customers);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching customers.');
    });
});




///////////////////////////////////////////////////////////////////////////////////////////////

app.get('/api/customers33', (req, res) => {
  const { id } = req.params;
  getCustomerById(id)
    .then(customers => {
      res.json(customers);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching customers.');
    });
});
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////




/*
app.post('/signin', (req, res) => {
  const formData = req.body;
  const password = req.body.password;
  const user_name = req.body.user_name;

  bcrypt.hash(password, 10)
    .then(hashedPassword => {
      const customer = { user_name, password: hashedPassword };
      return addCustomer(customer);
    })
    .then(userId => {
      if (userId.length == 0) {
        res.render('signin', { message: `The user ${req.body.user_name} already exists`, formData, success: false });
      } else {
        res.render('signin', { message: 'Login successful', success: true });
      }
    })
    .catch(error => {
      console.log(error);
      res.render('signin', { message: 'Something went wrong. Please try again.', formData, success: false });
    });
});

*/;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/api/customers/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  UpdateCustomer(id, updates)
    .then(() => {
      res.json({ message: 'customers updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while updating the customers.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.delete('/api/customers/:id', (req, res) => {
  const { id } = req.params;

  removeCustomer(id)
    .then(() => {
      res.json({ message: 'customers removed successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while removing the customers.');
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*app.get('/api/customers/:userName', async (req, res) => {
  try {
    const userName = req.params.userName;
    const customers = await getCustomerByUserName(userName);
    res.json(customers);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/airlineComoanies', (req, res) => {
  getAllAirlineCompanies()
    .then(airlineComoanies => {
      res.json(airlineComoanies);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching airline Comoanies.');
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/airlineComoanies/:id', (req, res) => {
  const { id } = req.params;
  getAirlineById(id)
    .then(airlineComoanies => {
      res.json(airlineComoanies);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching airline Comoanies.');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/api/airlineComoanies/:id', (req, res) => {
  const airlineComoanies = req.body;

  addAirLine(airlineComoanies)
    .then(airlineComoaniespath => {
      res.json({ message: 'airline Comoanies added successfully', path: airlineComoaniespath });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching airline Comoanies.');
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/api/airlineComoanies/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  UpdateAirLine(id, updates)
    .then(() => {
      res.json({ message: 'Airline updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while updating the airline.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////
app.delete('/api/airlineComoanies/:id', (req, res) => {
  const { id } = req.params;

  removeAirLine(id)
    .then(() => {
      res.json({ message: 'Airline removed successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while removing the airline.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/airlineComoanies/:userName', async (req, res) => {
  try {
    const userName = req.params.userName;
    const airlineComoanies = await getAirLineByUserName(userName);
    res.json(airlineComoanies);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/admin', (req, res) => {
  getAllAdmins()
    .then(admin => {
      res.json(admin);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching admin.');
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/admin/:id', (req, res) => {
  const { id } = req.params;
  getAdminByID(id)
    .then(admin => {
      res.json(admin);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching admin.');
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/api/admin/:id', (req, res) => {
  const customers = req.body;

  addAdmin(customers)
    .then(adminpath => {
      res.json({ message: 'admin added successfully', path: adminpath });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching admin.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/api/admin/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  UpdateAdmin(id, updates)
    .then(() => {
      res.json({ message: 'admin updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while updating the admin.');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
app.delete('/api/admin/:id', (req, res) => {
  const { id } = req.params;

  removeAdmin(id)
    .then(() => {
      res.json({ message: 'admin removed successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while removing the admin.');
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/admin/:userName', async (req, res) => {
  try {
    const userName = req.params.userName;
    const admin = await getAdminByUserName(userName);
    res.json(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/country', (req, res) => {
  getAllCountry()
    .then(country => {
      res.json(country);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching country.');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/country/:id', (req, res) => {
  const { id } = req.params;
  getCountryByID(id)
    .then(admin => {
      res.json(admin);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching country.');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/api/country/:id', (req, res) => {
  const country = req.body;

  addCountry(country)
    .then(countrypath => {
      res.json({ message: 'country added successfully', path: countrypath });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching country.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/api/country/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  UpdateCountry(id, updates)
    .then(() => {
      res.json({ message: 'country updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while updating the country.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.delete('/api/country/:id', (req, res) => {
  const { id } = req.params;

  removeCountry(id)
    .then(() => {
      res.json({ message: 'country removed successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while removing the country.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/Tickets', (req, res) => {
  getAllTickets()
    .then(Tickets => {
      res.json(Tickets);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching Tickets.');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/Tickets/:id', (req, res) => {
  const { id } = req.params;
  getTicketsByID(id)
    .then(Tickets => {
      res.json(Tickets);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching Tickets.');
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/api/Tickets/:id', (req, res) => {
  const country = req.body;

  addTickets(Tickets)
    .then(Ticketspath => {
      res.json({ message: 'Tickets added successfully', path: Ticketspath });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching Tickets.');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/api/Tickets/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  UpdateTickets(id, updates)
    .then(() => {
      res.json({ message: 'Tickets updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while updating the Tickets.');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.delete('/api/Tickets/:id', (req, res) => {
  const { id } = req.params;

  removeTickets(id)
    .then(() => {
      res.json({ message: 'Tickets removed successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while removing the Tickets.');
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/Tickets/:userName', async (req, res) => {
  try {
    const userName = req.params.userName;
    const Tickets = await getTicketsByUserID(userName);
    res.json(Tickets);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*app.get('/flights', (req, res) => {
  getAllflights()
    .then(flights => {
      res.render(flights), {flights};
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching flights.');
    });
});

*/


app.get('/flightsS', (req, res) => {
  getAllflights()
  const flightsS = [
    { id: 1, departs: 'New York', destination: 'Los Angeles', flight_number: 'A123', airline: 'Delta' },
    { id: 2, departs: 'Chicago', destination: 'San Francisco', flight_number: 'B456', airline: 'United' },
    { id: 3, departs: 'london', destination: 'Los Angeles', flight_number: 'A153', airline: 'El El' },
    { id: 4, departs: 'Paris', destination: 'tokyo', flight_number: 'B426', airline: 'fly emirats' },
    { id: 1, departs: 'tel aviv', destination: 'Los Angeles', flight_number: 'A123', airline: 'Delta' },
    { id: 2, departs: 'istanbul', destination: 'barclona', flight_number: 'B456', airline: 'United' },
    { id: 3, departs: 'Paris', destination: 'Los Angeles', flight_number: 'A153', airline: 'El El' },
    
  ];
  console.log(flightsS);
  res.render('flightsS', { flightsS: flightsS });
});




app.get('/updateflights.ejs', (req, res) => {
  
  const updatedflights = [
    { airline_company_id: 1, departure_time: '01:00', arrival_time: '17:00', flight_number: 'A123', airline: 'Delta', origin_country_id: "france" },
    { airline_company_id: 2, departure_time: '18:00', arrival_time: '19:00', flight_number: 'B456', airline: 'United', origin_country_id: "rio" },
    { airline_company_id: 3, departure_time: '02:00', arrival_time: '14:00', flight_number: 'A153', airline: 'El El', origin_country_id: "newyork" },
    { airline_company_id: 4, departure_time: '14:00', arrival_time: '18:00', flight_number: 'B426', airline: 'fly emirats', origin_country_id: "greenland" },
    { airline_company_id: 1, departure_time: '08:00', arrival_time: '14:00', flight_number: 'A123', airline: 'Delta', origin_country_id: "kopa" },
    { airline_company_id: 2, departure_time: '17:00', arrival_time: '18:00', flight_number: 'B456', airline: 'United', origin_country_id: "gorgia" },
    { airline_company_id: 3, departure_time: '09:00', arrival_time: '13:00', flight_number: 'A153', airline: 'El El', origin_country_id: "india" },
  ];
  console.log(updatedflights);
  res.render('updateflights', { updateflights: updatedflights });
});
app.delete('/updateflights/:id', (req, res) => {
  const { id } = req.params;

  removeFlight(id)
    .then(() => {
      res.json({ message: 'flight removed successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while removing the flight.');
    });
});
app.put('/UpdateFlights/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  UpdateFlights(id, updates)
    .then(() => {
      res.json({ message: 'flights updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while updating the flight.');
    });
});//
app.post('/UpdateFlights/:id', (req, res) => {
  const airlineComoanies = req.body;

  addAirLine(airlineComoanies)
    .then(airlineComoaniespath => {
      res.json({ message: 'airline Comoanies added successfully', path: airlineComoaniespath });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching airline Comoanies.');
    });
});
/*
 function deleteFlight(id) {
      fetch(`/updateflights/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        location.reload(); // Reload the page to see the updates
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
*/

///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/*
app.get('/checkflight',(req,res)=>{
  res.render('checkflight')
})
app.get('/checkflight', (req, res) => {
  const countryName = req.query.name;

  getCountryByname(countryName)
    .then(country => {
      res.json(country);
    })
    .catch(error => {
      res.status(404).json({ error: error.message });
    });
});
app.get('/checkflight', (req, res) => {
  const airlineCompanyId = req.query.airline_company_id;

  getFlightByAirLine(airlineCompanyId)
    .then(flights => {
      res.render('checkflight', { flights: flights });
    })
    .catch(error => {
      res.status(404).json({ error: error.message });
    });
});

*/
app.get('/checkflight', (req, res) => {
  const countryName = req.query.name;
  const airlineCompanyId = req.query.airline_company_id;

  if (countryName) {
    getCountryByname(countryName)
      .then(country => {
        res.json(country);
      })
      .catch(error => {
        res.status(404).json({ error: error.message });
      });
  } else if (airlineCompanyId) {
    getFlightByAirLine(airlineCompanyId)
      .then(flights => {
        console.log('Flights:', flights); 
        res.render('checkflight', { flights: flights });

      })
      .catch(error => {
        console.error('Error:', error); 
        res.status(404).json({ error: error.message });
      });
  } else {
    // Default behavior: render the checkflight template without data
    res.render('checkflight');
  }
});














app.get('/',(req,res)=>{
  res.render('home')
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
app.post('/admin', async (req, res) => {
  try {
      const formData = req.body
      const password = req.body.password;
      const user_name = req.body.user_name;

      const user = await getAdminByUserName(user_name)
      if (!user) {
          return res.render('admin', { message: `There is no such user ${user_name}`, formData })
      }
      const isPasswordOk = await bcrypt.compare(password, user?.password)

      if (!isPasswordOk) { 
          return res.render('admin', { message: `The password is wrong`, formData })
      } else {
          const jwtToken = jwt.sign({ id: user.id, user_name: user.user_name }, SECRET, { expiresIn: '10m' })
          console.log(jwtToken)
          res.cookie('user_token', jwtToken, { httpOnly: true })
          return res.redirect('/updateflights')
      }
  } catch (error) {
      console.log(error)
      res.status(500).send('something went wrong');
  }
})
*/


app.get('/admin/', (req, res) => {
  res.render('admin')
})
app.post('/admin', async (req, res) => {
  const { user_name, password } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("DB connected successfully: " + connection.threadId);

    const query = "SELECT * FROM administrators WHERE user_name =?";
    connection.query(query, [user_name], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Error logging in" });
      } else if (results.length === 0) {
        res.status(401).send({ message: "Invalid user_name or password" });
      } else {
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.error(err);
            res.status(500).send({ message: "Error logging in" });
          } else if (!isMatch) {
            res.status(401).send({ message: "Invalid user_name or password" });
          } else {
            const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
              expiresIn: "1h",
            });
            res.send({ message: "Logged in successfully", token });
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/updateflights');
          }

        });
      }
    });
  });
});


app.get('/signUpAdmin/', (req, res) => {
  res.render('signUpAdmin')
})
app.post("/signUpAdmin", async (req, res) => {
  const { first_name,last_name,password, user_name  ,id } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("DB connected successfully: " + connection.threadId);

    const query = "INSERT INTO administrators (first_name,last_name,phone_no,password, user_name , address , id ) VALUES (?,?,?,?,?)";
    connection.query(query, [first_name,last_name, user_name  ,id ,hashedPassword], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Error creating user" });
      } else {
        console.log("User created successfully");
        res.send({ message: "User created successfully" });
      }
    });
  });
});

  










app.get('/login/', (req, res) => {
  res.render('login')
})
/*
app.post('/login', (req, res) => {
  const formData = req.body;
  const password = req.body.password;
  const user_name = req.body.user_name;

  getCustomerByUserName(user_name)
      .then(user => {
          if (!user) {
              return res.render('login', { message: `There is no such user ${user_name}`, formData });
          }
          if (!user.password) {
              return res.render('login', { message: `User ${user_name} has no password stored`, formData });
          }
          return bcrypt.compare(password, user.password)
              .then(isPasswordOk => {
                  if (!isPasswordOk) {
                      return res.render('login', { message: `The password is wrong`, formData });
                  } else {
                      const jwtToken = jwt.sign({ id: user.id, user_name: user.user_name }, SECRET, { expiresIn: '10m' });
                      console.log(jwtToken);
                      res.cookie('user_token', jwtToken, { httpOnly: true });
                      return res.redirect('home');
                  }
              });
      })
      .catch(error => {
          console.log(error);
          res.status(500).send('Something went wrong');
      });
});
*/
app.post('/login', async (req, res) => {
  const { user_name, password } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("DB connected successfully: " + connection.threadId);

    const query = "SELECT * FROM customers WHERE user_name =?";
    connection.query(query, [user_name], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Error logging in" });
      } else if (results.length === 0) {
        res.status(401).send({ message: "Invalid user_name or password" });
      } else {
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.error(err);
            res.status(500).send({ message: "Error logging in" });
          } else if (!isMatch) {
            res.status(401).send({ message: "Invalid user_name or password" });
          } else {
            const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
              expiresIn: "1h",
            });
            res.send({ message: "Logged in successfully", token })
              res.redirect('/user');
              res.cookie('token', token, { httpOnly: true });
          }
        });
      }
    });
  });
});
app.get('/signIn.ejs',(req,res)=>{
  res.render('signIn')
})
app.post("/signin", async (req, res) => {
  const { first_name,last_name,phone_no,password, user_name , address ,id } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("DB connected successfully: " + connection.threadId);

    const query = "INSERT INTO customers (first_name,last_name,phone_no,password, user_name , address , id ) VALUES (?, ?, ?,?,?,?,?)";
    connection.query(query, [first_name, last_name, phone_no, user_name, address , id , hashedPassword], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Error creating user" });
      } else {
        console.log("User created successfully");
        res.send({ message: "User created successfully" });
        
      }
    });
  });
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////



app.get('/contact',(req,res)=>{
  res.render('contact' , {
    phoneNumber: '+974 54-351-4113',
    socialMedia: {
      facebook: 'https://facebook.com/mohamedMatani3333333333',
      twitter: 'https://twitter.com/yourprofile',
      instagram: 'https://instagram.com/momatani___',
  }
})
})



app.get('/user', (req, res) => {
  const userName = req.query.user_name;

  getTicketsByUserName(userName)
      .then(tickets => {
          res.render('tickets', { tickets });
      })
      .catch(error => {
          res.status(404).render('tickets', { error: error.message });
      });
});
app.post('/user', (req, res) => {
  const customerId = req.body.customerId;
  const newData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_no: req.body.phone_no
  };

  UpdateCustomer(customerId, newData)
      .then(result => {
          res.send('Customer details updated successfully');
      })
      .catch(error => {
          res.status(500).send('Error updating customer details: ' + error.message);
      });
});






app.listen(port,()=>{
    console.log(`express server is running on port ${port}`)
})