import { UserController } from '../controllers'
import { router } from './router'

/**
 * @openapi
 * /api/users:
 *   get:
 *     tag: Users
 *     summary: Retrieve a list of users
 *     description: This route returns list of users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', UserController.getUsers)

export default router
