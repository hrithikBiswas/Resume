let ALLWORKS = [
    {
        id: 1,
        categoryName: 'Portfolio',
        image: '../images/work/portfolio.png',
        title: '',
        templateName: 'Portfolio',
        templateLink: 'https://hrithikbiswas.github.io/',
    },
    {
        id: 2,
        categoryName: 'Movie',
        image: '../images/work/disney.png',
        title: '',
        templateName: 'Disney',
        templateLink: 'https://disney-clone-c21a8.web.app',
    },
    {
        id: 3,
        categoryName: 'Clone',
        image: '../images/work/linkedin.png',
        title: '',
        templateName: 'Linkedin',
        templateLink: 'https://linkedin-clone-mu-woad.vercel.app/',
    },
    {
        id: 4,
        categoryName: 'Others',
        image: '../images/work/woocommerce.png',
        title: '',
        templateName: 'Woocommerce',
        templateLink: 'https://woo-commerce-google-analytics.vercel.app/',
    },
    {
        id: 5,
        categoryName: 'Food',
        image: '../images/work/restaurant.png',
        title: '',
        templateName: 'lambda-restaurant',
        templateLink: 'http://restaurant-template-ruby.vercel.app',
    },
    {
        id: 6,
        categoryName: 'Travel',
        image: '../images/work/travelling.png',
        title: '',
        templateName: 'Travelling-template',
        templateLink: 'http://travel-template.vercel.app',
    },
    {
        id: 7,
        categoryName: 'Clone',
        image: '../images/work/socialite.png',
        title: '',
        templateName: 'Socialite',
        templateLink:
            'https://socialite-template-raw-tailwindcss-v3-git-9570bc-hrithik-biswas.vercel.app/',
    },
    {
        id: 8,
        categoryName: 'Others',
        image: '../images/work/Current-Weather-App.png',
        title: '',
        templateName: 'CurrentWeather App',
        templateLink: 'https://weather-nextjs-gray.vercel.app',
    },
    {
        id: 9,
        categoryName: 'E-Commerce',
        image: '../images/work/ecommerce.png',
        title: '',
        templateName: 'E-Commerce Website',
        templateLink: 'https://ecommerce-nextjs-ebon.vercel.app/',
    },
    {
        id: 10,
        categoryName: 'Dashboard',
        image: '../images/work/calling-dashboard.png',
        title: '',
        templateName: 'Analytical Dashboard',
        templateLink: 'https://assessment-for-frontend-developer.vercel.app/',
    },
    {
        id: 11,
        categoryName: 'Dashboard',
        image: '../images/work/analytical-dashboard.png',
        title: '',
        templateName: 'Analytical Dashboard',
        templateLink: 'https://analytics-dashboard-omega-three.vercel.app/',
    },
    {
        id: 12,
        categoryName: 'E-Commerce',
        image: '../images/work/beautiva-shop.png',
        title: '',
        templateName: 'Beautiva Shop',
        templateLink: 'https://beautiva-shop-nextjs.vercel.app/',
    },
    {
        id: 13,
        categoryName: 'Others',
        image: '../images/work/invoicely-ai-saas.png',
        title: '',
        templateName: 'Invoicely AI SaaS',
        templateLink: 'https://invoicely-ai-saas.vercel.app/',
    },
].reverse();

const filteredByCategory = (filteredName) => {
    return ALLWORKS.filter((allWork) => allWork.categoryName === filteredName);
};

const categoriesName = [...new Set(ALLWORKS.map((name) => name.categoryName))];

export { ALLWORKS, categoriesName, filteredByCategory };
