const asyncHendler = (requestHendler) => {
    (req, res, next) => {
        Promise.resolve(requestHendler(req, res, next)).catch((err)=> next(err))
    }
}

export { asyncHendler }
















// const asyncHendler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }