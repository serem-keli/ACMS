function checkUserRole(allowedRoles) {
    return (req, res, next) => {
      const user = req.user; 
  
      if (!user || !user.role) {
        // If the user is not authenticated or doesn't have a role, deny access
        return res.redirect("/")
      }
  
      if (!allowedRoles.includes(user.role)) {
        return res.redirect("/")
      }
      next();
    };
  }
  
  module.exports = checkUserRole;