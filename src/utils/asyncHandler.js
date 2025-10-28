const asyncHandler = (rewuestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}







export {asyncHandler}




// const asyncHandler = (fn) => {}
// const asyncHandler = (fn) => () =>{}

// const asyncHandler = (fn) => async (req, res, next) =>{
//     try {

//     }catch (error){
//         res.status(error.code || 8000).json({
//             success: false,
//             message: error.message
//         })
//     }
// }