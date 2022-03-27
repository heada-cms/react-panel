import {BASE_URL_API} from "../../config/env";

export const exerciseMock = (mock) => {
    mock.onGet(`${BASE_URL_API}/exercises/1`).reply(config => {
        return ([200,
            {
                id: 1,
                name: 'Przysiady ze sztangą',
                descriptionSteps: ['rozstaw stóp na szerokość bioder', 'chwyt rwaniowy na sztandze,', 'sztangę umieść na barkach za karkiem','następnie uginając kolana podrzuć sztangę w górę i dynamicznie zejdź ""pod sztangę"" do półprzysiadu','wskazane jest aby wykonać rozrzut stóp na szerokość ramion','przejdź do pełnego wyprostu ze sztangą umieszczoną nad głową','wróć do pozycji startowej'],
                type: 'Wielostawowe',
                equipment: ['sztanga'],
                muscles: ['uda', 'pośladki'],
                videoUrl: 'https://www.youtube.com/watch?v=NjdgcHdzvac&ab_channel=LinkinPark',
                images: [
                    {
                        url: 'https://traineronprod.blob.core.windows.net/exercise-img/885_logo_1-2-zejscie-rwaniowe.jpg?ver=1',
                        alt: 'alt'
                    },
                    {
                        url: 'https://traineronprod.blob.core.windows.net/exercise-img/885_gallery_2_1-2-zejscie-rwaniowe.jpg?ver=1',
                        alt: 'alt'
                    },
                    {
                        url: 'https://traineronprod.blob.core.windows.net/exercise-img/885_gallery_3_1-2-zejscie-rwaniowe.jpg?ver=1',
                        alt: 'alt'
                    }

                ],
            },
        ]);
    });
};