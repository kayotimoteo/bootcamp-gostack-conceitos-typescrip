import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Arrays
// intefaces
// vetores

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'timoteokayo@gmail.com',
    password: '12345',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  console.log(user.email);

  return response.json({ message: 'Hello World' });
}