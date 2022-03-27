import { BASE_URL_API} from "../../config/env";

export const registerMock = (mock) => {
    mock.onPost(`${BASE_URL_API}/sign-up`).reply(200, {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2IiwidW5pcXVlX25hbWUiOiI2IiwianRpIjoiNDdkMmM3NzItODIwZi00ZDdlLTgxNDktYjdhMzlhZDkzZmExIiwiaWF0IjoiMTY0Nzk1MzQ0MCIsInJvbGUiOiJWaW5leWFyZEFkbWluIiwiZW1haWwiOiJrYXJvbC5qb25pYWs0QGdtYWlsLmNvbSIsIlZpbmV5YXJkSWQiOiIyIiwibmJmIjoxNjQ3OTUzNDQwLCJleHAiOjE2NDc5NTUyNDAsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6ImxvY2FsaG9zdCJ9.vLky-iSpreYd3HJ7aIwpdJWsSaVngoEnN728plNbT_U',
    });
};