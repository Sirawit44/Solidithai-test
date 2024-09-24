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

    http.post('/api/register', async ({request}) => {
        const { firstName, lastName, age, gender, email, password, confirmPassword } = await request.json();

        if (!email || !password || password !== confirmPassword) {
            return HttpResponse.json({ message: 'Invalid registration data.' }, { status: 400 });
            
        }

        return HttpResponse.json({ id: '1', name: 'John Doe', email: 'admin@example.com' }, { status: 201 });
    }),
];
