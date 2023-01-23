import app from "./app.js"
const main=()=>{
     app.listen(app.get("port"))
     console.log(`serve on port: http://localhost:${app.set("port")}`);
}
main()