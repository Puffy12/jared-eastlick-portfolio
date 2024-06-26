/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const nextConfig = {
    reactStrictMode: true,

    env: {
        SERVICE_ID: process.env.SERVICE_ID,
        TEMPLATE_ID: process.env.TEMPLATE_ID,
        USER_ID: process.env.USER_ID
    }
};

module.exports = nextConfig;
