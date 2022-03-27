export const routes = {
    home: '/',
    login: '/logowanie',
    register: '/rejestracja',
    forgotPassword: '/przypomnienie-hasla',
    tab: '/panel-fizjoterapia',
    anotherTab: '/panel-fizjoterapia/another-tab',
    yetAnotherTab: '/panel-fizjoterapia/yet-another-tab',
    thisIsATab: '/panel-fizjoterapia/this-is-a-tab',
    patients: '/pacjenci',
    exercises: '/cwiczenia',
    exercisesDetails: '/cwiczenia/:id',
    trainingPlans: '/plany-treningowe',
    account: '/moje-konto',
    profile: '/moj-profil',
};

// funkcja przyjmuje obiekt zwracany przez hooka useParams
// dla przykladowego routa "/exercises/:id" oraz paramsów "{id: 1}"
// funkcja zwraca "/exercises/1"
export const passParams = (route, params) => {
    const parts = route.split('/')
    let index = 0;
    let newRoute = '';
    for (let i = 1; i < parts.length; i++) {
        newRoute += '/'
        if(parts[i].includes(':')){
            newRoute += params[parts[i].replace(':', '')];
            index++;
        }
        else {
            newRoute += parts[i];
        }
    }
    return newRoute;
}