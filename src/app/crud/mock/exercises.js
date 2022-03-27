import {BASE_URL_API} from "../../config/env";

export const exercisesMock = (mock) => {
    mock.onGet(`${BASE_URL_API}/exercises`).reply(config => {
        return ([200, [...Array(5).keys()].map(id => (
                {
                    id: 1,
                    name: 'Przysiady ze sztangą',
                    type: 'Wielostawowe',
                    muscles: ['uda', 'pośladki'],
                    image: {
                        url: 'https://traineronprod.blob.core.windows.net/exercise-img/885_logo_1-2-zejscie-rwaniowe.jpg?ver=1',
                        alt: 'alt'
                    },
                }
            ))
        ]);
    });
};