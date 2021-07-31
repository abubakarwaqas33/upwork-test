var apiUrl = process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_WEBSITE_URL_DEVELOPMENT // development api
    : process.env.NEXT_PUBLIC_WEBSITE_URL_PRODUCTION; // prodSuction api
export { apiUrl };
// Purpose during deployment