const bcrypt = require("bcryptjs");
const { userModel } = require("../model");
const { generateToken } = require("../service/jwtAuthentication");

const BCRYPT_SALT = bcrypt.genSaltSync(10); //add .env later

exports.post = async (req, res) => {
  const { name, email, password, lastName } = req.body;

  const userExists = await userModel.findOne({ where: { email } });

  if (userExists) {
    return res.status(409).json({
      error: "User already exists!",
    });
  }

  await userModel.create({
    name,
    email,
    lastName,
    password: bcrypt.hashSync(password, BCRYPT_SALT),
  });

  return res.status(201).json({
    message: "User registered with success!",
  });
};

exports.get = async (req, res) => {
  const users = await userModel.findAll();
  res.json(users);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized, wrong email!",
    });
  }
  const authUser = await bcrypt.compare(password, user.password);

  if (!authUser) {
    return res.status(401).json({
      message: "Unauthorized, wrong password",
    });
  }

  const userPayload = {
    userId: user.dataValues.id,
    name: user.name,
    lastName: user.lastName,
  };

  const token = generateToken(userPayload);

  return res.status(200).json({ token, ...userPayload });
};
