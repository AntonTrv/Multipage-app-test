let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
const PORT = 3001;

let pool = new pg.Pool({
  port: 5432,
  database: 'anton',
  max: 10,
  host: 'localhost',
  user: 'anton'
})


let app = express();



app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// GET
app.get('/api/users', function(request,response) {
  pool.connect(function(err, db, done){
    if(err){
      return response.status(400).send(err);
    }else {
      db.query('SELECT * FROM users', function(err, table){
        done();
        if(err){
          return response.status(400).send(err);
        }
        else{
          return response.status(200).send(table.rows);
        }
      })
    }
  })
})
//POST
app.post('/api/new-users', function(request, response) {
  console.log(request.body)
  const user_first_name = request.body.user_first_name;
  const user_last_name = request.body.user_last_name;
  const user_email = request.body.user_email;
  const user_password = request.body.user_password;
  const values = [user_first_name, user_last_name, user_email, user_password];

  //QUERY request to INSERT in conditions
  pool.connect((err, db, done) => {
  if(err) {
    return response.status(400).send(err);
  }else {
    db.query('INSERT INTO users (user_first_name, user_last_name, user_email, user_password) VALUES($1, $2, $3, $4)', [...values], (err, table) => {
      if(err){
        console.log(err)
        return response.status(400).send(err);
      }else {
        return console.log('DATA INSERTED');
        db.end();
        response.status(201).send({message:'Data Inserted!'});

      }
    })
  }
})
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
