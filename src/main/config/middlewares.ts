import { Express } from 'express'
import { bodyParser } from '../middleware/body-parse'

export default (app: Express): void => {
  app.use(bodyParser)
}
