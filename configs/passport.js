import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as LocalStrategy } from 'passport-local'

import User from '../models/user.js'

import config from './vars.js'

export default function passportInit() {
    const googleOptions = {
        clientID: config.google_CLIENT_ID,
        clientSecret: config.google_CLIENT_SECRET,
        callbackURL: config.google.redirect_url,
        scope: ['profile', 'email'],
    }

    const googleVerify = async (accessToken, refreshToken, profile, done) => {
        // Check if the user already exists in your database
        try {
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                // User already exists, so log them in
                return done(null, existingUser)
            }

            // User doesn't exist, create a new user with Google data
            const newUser = new User({
                googleId: profile.id,
                username: profile.displayName,
                email: profile.emails[0].value,
                isEmailVerified: true,
                // Add more user data as needed
            })

            await newUser.save()
            return done(null, newUser)
        } catch (err) {
            return done(err)
        }
    }

    passport.use(new LocalStrategy(User.authenticate()))
    passport.use(new GoogleStrategy(googleOptions, googleVerify))

    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser())
}
