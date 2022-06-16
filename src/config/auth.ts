export default {
  jwt: {
    secret: process.env.SECRET || "test-secret",
    expiresIn: "1d",
  },
};
