import dotenv from 'dotenv'

dotenv.config()

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    base_URL: process.env.BASE_URL,
    db_URI: process.env.DB_URI,
    session_SECRET: process.env.SESSION_SECRET,
    // TODO: change this to your secret key
    cloudinary_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_API_KEY: process.env.CLOUDINARY_API_KEY,
    cloudinary_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    cloudinary_UPLOAD_PRESET_CAMPAIGN: process.env.CLOUDINARY_UPLOAD_PRESET_CAMPAIGN,
    cloudinary_UPLOAD_PRESET_ARTICLE: process.env.CLOUDINARY_UPLOAD_PRESET_ARTICLE,
    google_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    google_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    google: {
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    },
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        upload_preset_campaign: process.env.CLOUDINARY_UPLOAD_PRESET_CAMPAIGN,
        upload_preset_article: process.env.CLOUDINARY_UPLOAD_PRESET_ARTICLE,
    },
    email: {
        smtp: {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        },
        from: process.env.EMAIL_FROM,
    },
    midtrans: {
        isProduction: process.env.NODE_ENV === 'production',
        merchantId: process.env.MIDTRANS_MERCHANT_ID,
        clientKey: process.env.MIDTRANS_CLIENT_KEY,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
    },
}
