import { server } from "./server.js";

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`You are now using ${PORT}`);
});
