import { Router } from 'express'
const router = Router()
import * as hurstonCtrl from '../controllers/hurstons.js'

// localhost:3000/api/hurstons RETRIEVE ALL COLLECTIONS
router.get('/hurstons', hurstonCtrl.index)
// localhost:3000/api/hurstons/:id RETRIEVE A SINGLE COLLECTION
router.get('/hurstons/:id', hurstonCtrl.show)
// localhost:3000/api/hurstons ADD A DOCUMENT TO COLLECTION
router.post('/hurstons', hurstonCtrl.create)
// localhost:3000/api/hurstons/:id UPDATE A SINGLE DOCUMENT
router.put('/hurstons/:id', hurstonCtrl.update)
// localhost:3000/api/hurstons/:id DELETE A SINGLE DOCUMENT
router.delete('/hurstons/:id', hurstonCtrl.delete)

export {
  router
}

