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
        categoryName: 'Portfolio',
        image: '../images/work/portfolio2.png',
        title: '',
        templateName: 'BootstrapPortfolio',
        templateLink: 'https://hrithikbiswas.github.io/bootstrap-project-01',
    },
    {
        id: 3,
        categoryName: 'Travel',
        image: '../images/work/travelling.png',
        title: '',
        templateName: 'Travelling-template',
        templateLink: 'http://travel-template.vercel.app',
    },
    {
        id: 4,
        categoryName: 'Food',
        image: '../images/work/restaurant.png',
        title: '',
        templateName: 'lambda-restaurant',
        templateLink: 'http://restaurant-template-ruby.vercel.app',
    },
    {
        id: 5,
        categoryName: 'Movie',
        image: '../images/work/disney.png',
        title: '',
        templateName: 'Disney',
        templateLink: 'https://disney-clone-c21a8.web.app',
    },
    {
        id: 6,
        categoryName: 'Gaming',
        image: '../images/work/gaming.png',
        title: '',
        templateName: 'Modz-gaming',
        templateLink: 'https://hrithikbiswas.github.io/gaming-website/',
    },
    {
        id: 7,
        categoryName: 'Clone',
        image: '../images/work/linkedin.png',
        title: '',
        templateName: 'Linkedin',
        templateLink: 'https://linkedin-clone-three-eta.vercel.app',
    },
    {
        id: '8',
        categoryName: 'Clone',
        image: '../images/work/socialite.png',
        title: '',
        templateName: 'Socialite',
        templateLink:
            'https://socialite-template-raw-tailwindcss-v3.vercel.app',
    },
    {
        id: 9,
        categoryName: 'Others',
        image: '../images/work/woocommerce.png',
        title: '',
        templateName: 'Woocommerce',
        templateLink: 'https://woo-commerce-google-analytics.vercel.app/',
    },
    {
        id: 10,
        categoryName: 'Others',
        image: '../images/work/mogo.png',
        title: '',
        templateName: 'Mogo',
        templateLink: 'https://hrithikbiswas.github.io/prtacticeForMyself',
    },
];

const filteredByCategory = (filteredName) => {
    return ALLWORKS.filter((allWork) => allWork.categoryName === filteredName);
};

const categoriesName = [...new Set(ALLWORKS.map((name) => name.categoryName))];

export { ALLWORKS, categoriesName, filteredByCategory };
