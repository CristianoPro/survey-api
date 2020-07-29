import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  it('Shuld return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Cristiano',
        email: 'cristiano.so@hotmail.com',
        passwortd: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
