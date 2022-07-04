import query from "./db.js";
import parseDoc from "./utils/parseDoc.js";

try {
  const docs = await query.get();
  const users = docs.docs.map(parseDoc)
  console.log(users)
} catch (err) {
  console.log(`Error: ${e.message}`);
}
