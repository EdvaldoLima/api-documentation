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
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */