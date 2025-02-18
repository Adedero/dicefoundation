const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  const redirectUrl = '/auth/login?redirect=' + encodeURIComponent(req.originalUrl)
  return res.redirect(redirectUrl)
}

module.exports = isAuthenticated