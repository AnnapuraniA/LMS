export const createUser = async (req, res) => {
  try {
    const { name, username, password, role, departmentId } = req.body;

    if (!["faculty", "student"].includes(role)) {
      return res.status(400).json({ message: "Only faculty or student allowed" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      username,
      password: hashed,
      role,
      departmentId,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
