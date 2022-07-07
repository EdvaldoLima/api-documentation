/**
 * @apiVersion 1.0.0
 * @api {get} /users Request All Users
 * @apiName GetAllUsers
 * @apiGroup User
 *
 *
 * @apiSuccess {Array} firstname user name.
 * @apiSuccess {Array} lastname user lastname.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *       "firstname": "Mario",
 *       "lastname": "World"
 *      },
 *      {
 *       "firstname": "Luigi",
 *       "lastname": "World"
 *      },
 *    ]
 */

/**
 * @apiVersion 1.0.0
 * @api {get} /users/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname user name.
 * @apiSuccess {String} lastname  user lastname.
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
