import { UserController } from '../controllers'
import { router } from './router'

router.get('/users', UserController.getUsers)

export default router
