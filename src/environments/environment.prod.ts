export const environment = {
	production: true,
	configFile: '/configs/prod.json',
	defaultLang: 'es',
	pooling: 300000,
	updateIntervalCheck: 3600000,
	summaryLastDays: 7,
	firebase: {
		apiKey: 'AIzaSyA_224uRQAJ3qTf-KfFcZYtVmqjBMVOTVA',
		authDomain: 'covidmeters.firebaseapp.com',
		databaseURL: 'https://covidmeters.firebaseio.com',
		projectId: 'covidmeters',
		storageBucket: 'covidmeters.appspot.com',
		messagingSenderId: '764651860453',
		appId: '1:764651860453:web:c73ffe0d085b274766bf0c',
		measurementId: 'G-T12TR7MST4'
	}
};
