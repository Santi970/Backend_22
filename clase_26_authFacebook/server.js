const express = require("express");
const session = require("express-session");

const redis = require("redis");

const passport = require("passport");
//facebook
const { Strategy: FacebookStrategy } = require("passport-facebook");
//twitter
const { Strategy: TwitterStrategy } = require("passport-twitter");

const clientRedis = redis.createClient({
  legacyMode: true,
});

clientRedis.connect();

const app = express();

app.use(
  session({
    secret: "qwerty",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  clientRedis.set(`user:${user.id}`, JSON.stringify(user), (err) => {
    if (err) {
      return done(err, false);
    }

    return done(null, user.id);
  });
});

passport.deserializeUser((id, done) => {
  console.log("deserializeUser");
  clientRedis.get(`user:${id}`, (err, value) => {
    if (err) {
      return done(err, false);
    }

    return done(null, JSON.parse(value));
  });
});
//aca autenticamos el usuario
const facebookCallback = (token, tokenSecret, profile, done) => {
  console.log({ token, tokenSecret, profile });
  done(null, profile._json);
};

//coneccion con data creada con https://developers.facebook.com/
const facebookStrategy = new FacebookStrategy(
  {
    clientID: "1155286961869630",
    clientSecret: "eb173043038f1cd9d71811bca2002975",
    callbackURL: "http://localhost:8080/auth/facebook/callback",
  },
  facebookCallback
);

passport.use(facebookStrategy);

//twiter
passport.use(
  new TwitterStrategy(
    {
      consumerKey: "2bcPJm7r1fUg6rAkg9MvXl7RA",
      consumerSecret: "89YBs4a6QNNsBhSVqzxELZ8ld1eGS3NigYkGZL0zGcR117xbiN",
      callbackURL: "http://localhost:8080/auth/twitter/callback",
    },
    (token, tokenSecret, profile, done) => {
      console.log({ token, tokenSecret, profile });
      return done(null, {
        id: profile._json.id,
        name: profile._json.name,
      });
    }
  )
);

//facebook --------
//primero va a face...
app.get("/auth/facebook", passport.authenticate("facebook"));

//en esta url se vuelve a tomar el flujo
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  })
);

//twiter --------
app.get("/auth/twitter", passport.authenticate("twitter"));

app.get("/auth/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  })
);

app.get(
  "/profile",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }

    return res.status(401).json({ error: "Necesitas iniciar sesión" });
  },
  (req, res) => {
    return res.json({
      user: req.user,
      session: req.session,
    });
  }
);

const PORT = 8080;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
