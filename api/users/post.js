/**
 * @apiVersion 1.0.0
 * @api {post} /users Create a new User
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiBody {Object} name A name user
 * @apiBody {Object} email A email user
 * @apiBody {Object} [phone] A phone user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError name User name is required.
 * @apiError email User email is required.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "name": "name is required",
 *       "email": "email is required"
 *     }
 */