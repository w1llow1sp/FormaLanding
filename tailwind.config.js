module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            primary: 'Roboto',
            secondary: 'Monserrat',
        },
        screens: {
            xsm: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1192px',
        },
        extend: {
            colors: {
                primary: '#000000',
                white: '#FFFFFF',
                BtnDefault: 'linear-gradient(90deg, #4C6071 0%, #55BDEA 100%)',
                BtnActive: 'linear-gradient(90deg, #6488DF 0%, #193F50 99.74%)',
                BtnDisable: '#8F8F8F',
                accentBg: '#4C7169',
            },
            theme: {
                extends: {
                    backgroundImage: {
                        'welcome-page': "url('/src/img/Header/Background.png')",
                    },
                },
            },
        },
    },
    plugins: [],
};
