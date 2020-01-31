const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const port = 3000;
app.post("/login", (req, res) => {
  if (req.body.email === "zadi@gmail.com" && req.body.password === "123456") {
    res.json({
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjoyLCJ0b2tlbklkIjoiNjk0MjVlOTgtYzc4OC00ZWQxLTk5ZWYtMTQyZDA0NmRjODc3IiwiaWF0IjoxNTgwMjIyOTA2LCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyJ9.to35GZ36iJ7smC5lsDdzCarJ8NQYkknGCnGmV91FEUeq6WYAUw5Kb-Pe8MTHZNBMhqGxQgwISWX1_iW1GhQ6boTc0HhMfkMKS87bnafZyiTsBoDOwI2mp5iaq8BfuPFFIf_wxgiRk_PGHETOpj_2KaLXlN2kJk2plL0aK7v5imafiXeaqMb8FB75Clu5yyLAiU3tdT_Qsz3Oyw7TkRZQIIRwuFfMJx_OUK0cHKgl8h5EWYhj4VMiPvOPJzDZ_wMgwuMGlBjwpgiVLaNhUfQqVCfD2R7hUrE9GkHurXPTGd0Ubj_nGQ31KtHw7NkH-08LejI2DEF9WC3lTpz5p6NUZQ4a5uMjfe_Z5WTYKc8NRQaOeKSDHmpwAY6eB673xBLySF_cHUBDe9YwWqEXXll3lWbNzG5FC9YvplbuO1Xbk3xO60XuN7jVZzxVo6tQCJeI0jNSjRxMoJW-mp9y69KZD_jo4SAD2CRPhWLSBR1hnJwAcPiwfD1fFjIFgN7PauVMMNZMB9gyOJaTPYyANN5pNHkpbs00bBpmCyO0zU7xQiUXR2wENKGgVrfPX4DQimGZahFZG3m3XK9DZYBCcLfgUlVLgFSgCFckx99rwdWUEWGCU7PQpQpjLJjOqvf6ITnSvaVKnwRlXWk247BfMAryg5besBVsxlMV9aeQUMg-COE"
    });
  }
  res.status(403);
  res.json({ error: "Email and Password is not Valid" });
});

app.listen(port, () => console.log(`Server Listen on port: ${port}`));
