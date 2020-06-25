export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Nomad Movies";
    next();
  };
  