const { Router } = require("express");
const router = Router();

router.get("/hola", (req, res) => {
    const data = {
        "Name": "Hola"
    }
    res.json(data)
})

module.exports = router;