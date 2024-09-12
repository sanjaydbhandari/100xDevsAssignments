const express = require("express");
const app = express();

app.use(express.json());
app.post("/add", (req, res) => {
  res.json({
    result: parseInt(req.body.a) + parseInt(req.body.b),
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
