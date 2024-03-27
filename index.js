import express from "express";

const PORT = 3000;

const startAndSetupServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/home", (req, res) => {
    res.json({
      message: "Hello",
    });
  });

  app.listen(PORT, () => {
    console.log("Server started running on PORT", PORT);
  });
};

startAndSetupServer();
