import { http, HttpResponse } from 'msw';

export const authHandler = [
    http.post('/api/login', async ({request, params, cookies}) => {
        const { email, password } = await request.json();
        console.log(email)

        if (email === 'admin@example.com' && password === '123456') {
            return HttpResponse.json({ id: '1', name: 'John Doe', email }, { status: 200 });
        }

        return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }),

    http.post('/api/register', (req, res, ctx) => {
        return HttpResponse.json({ id: '1', name: 'John Doe', email: 'john@example.com' }, { status: 200 });
    }),
];
