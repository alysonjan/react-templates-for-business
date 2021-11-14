export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get Access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    // img: process.env.PUBLIC_URL + '/images/svg-1.svg',
    img: require('../../images/svg-1.svg').default,
    alt:'collab',
    dark: true,
    primary: true,
    darkText: false 
}

export const homeObjTwo = {
    id:'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get Access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn More',
    imgStart: true,
    // img: process.env.PUBLIC_URL + '/images/svg-1.svg',
    img: require('../../images/svg-2.svg').default,
    alt:'Ai',
    dark: false,
    primary: false,
    darkText: true 
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team ',
    headLine: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start now',
    imgStart: false,
    // img: process.env.PUBLIC_URL + '/images/svg-1.svg',
    img: require('../../images/svg-3.svg').default,
    alt:'collab',
    dark: false,
    primary: false,
    darkText: true 
}