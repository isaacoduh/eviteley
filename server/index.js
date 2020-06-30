const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user.model');
require('./helpers/passport');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(conn => {
    console.log(`MongoDB Connected with host: ${conn.connection.host}`);
});

const app = express();

app.use(cookieSession({maxAge: 86400, keys: [keys.cookieKey]}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth.routes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);