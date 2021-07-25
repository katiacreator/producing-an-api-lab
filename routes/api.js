import { Router } from 'express'
const router = Router()
import * as hurstonCtrl from '../controllers/hurstons.js'


router.get('/hurston', hurstonCtrl.index)
router.get('/hurston/:id', hurstonCtrl.show)
router.post('/hurston', hurstonCtrl.create)
router.put('/hurston/:id', hurstonCtrl.update)
router.delete('/hurston/:id', hurstonCtrl.delete)

export {
  router
}

