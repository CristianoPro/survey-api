import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('account')
    await accountCollection.deleteMany({})
  })

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
