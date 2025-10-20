import jwt from "jsonwebtoken";

export const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check role if provided
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ success: false, message: "Forbidden: insufficient rights" });
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
  };
};
