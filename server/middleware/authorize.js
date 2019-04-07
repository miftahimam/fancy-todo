module.exports = {
    isAuthorizedUser: (req, res, next) => {
        try {
            if(req.user.id.toString() === req.params.id) {
                next()
            } else {
                res.status(401).json({
                    message: 'Unauthorized'
                })
            }
        } catch (err) {
            res.status(403).json({
                message: 'Forbidden'
            })
        }
    }
}