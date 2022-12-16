const app = require("./app");
const setupServer = require("./dbInitialSetup");

const PORT = process.env.PORT;

// setupServer();

app.listen(PORT, () => {
  console.log(`Server listening on port localhost:${PORT}`);
});
