import jwt from "jsonwebtoken";

const users = [
  { email: "user1@example.com", password: "password123" },
  { email: "user2@example.com", password: "password456" }
];

const SECRET_KEY = "your_secret_key";

export const authenticateUser = (email, password) => {
  console.log(`Authenticating user: ${email} with password: ${password}`);
  console.log("Users available:", users);

  const user = users.find(user => user.email === email && user.password === password);
  console.log("User found:", user);

  if (!user) {
    console.error("Authentication failed: Invalid email or password");
    throw new Error("Invalid email or password");
  }

  try {
    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    console.log("Authentication successful, token generated:", token);
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return null;
  }
};
