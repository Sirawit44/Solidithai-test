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

    http.get('/api/users', async (request) => {
        return HttpResponse.json([
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'admin@example.com',
                gender: 'Male',
                age: 30,
              },
              {
                id: 2,
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@example.com',
                gender: 'Female',
                age: 28,
              },
              {
                id: 3,
                firstName: 'Alice',
                lastName: 'Johnson',
                email: 'alice.johnson@example.com',
                gender: 'Female',
                age: 35,
              },
              {
                id: 4,
                firstName: 'Bob',
                lastName: 'Brown',
                email: 'bob.brown@example.com',
                gender: 'Male',
                age: 40,
              },
              {
                id: 5,
                firstName: 'Charlie',
                lastName: 'Davis',
                email: 'charlie.davis@example.com',
                gender: 'Non-binary',
                age: 25,
              },
        ], {status: 200})
    }),

    http.get('/api/users/:id', ({request, params}) => {
        const { id } = params;
        console.log(id)

        const users = [
          {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'admin@example.com',
            gender: 'Male',
            age: 30,
          },
          {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            gender: 'Female',
            age: 28,
          },
          {
            id: 3,
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@example.com',
            gender: 'Female',
            age: 35,
          },
          {
            id: 4,
            firstName: 'Bob',
            lastName: 'Brown',
            email: 'bob.brown@example.com',
            gender: 'Male',
            age: 40,
          },
          {
            id: 5,
            firstName: 'Charlie',
            lastName: 'Davis',
            email: 'charlie.davis@example.com',
            gender: 'Non-binary',
            age: 25,
          },
        ];

        const user = users.find(user => user.id == id);
        console.log(user)

        if (user) {
            return HttpResponse.json(user, {status:200});
        } else {
            return HttpResponse.json({ message: 'User not found' }, {status:404});
        }
    }),
];
