import User from '../model/User';
import UC from '../controller/UserController';

const uc = new UC();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import { getConnection } from 'typeorm';

passport.use(new LocalStrategy(
     async (username: string, password: string, done: any) => {
        await getConnection().getRepository(User).findOne({ email: username })
            .then(async user => {
                if (!user) { return done(null, false) }
                const isValid = await uc.validateUser(username, password);
                if (isValid) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
            .catch(err => {
                console.log(err);
                done(err);
            });
    }
));

passport.serializeUser((user: User, done: any) => {
    done(null, user.id);
});

passport.deserializeUser( (id: any, done: any) => {
    getConnection().getRepository(User).findOne({ id: id })
        .then(user => { done(null, user); })
        .catch(error => { done(error); });
});

