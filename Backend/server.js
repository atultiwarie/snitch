import app from "./src/app.js";
import connectToDB from "./src/config/db.js";
const PORT = process.env.PORT || 3000;


// calling the database
connectToDB()

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
