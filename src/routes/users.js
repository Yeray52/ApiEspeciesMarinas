const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
    const fetch = await import('node-fetch').then(module => module.default);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    res.send(users);
});

module.exports = router;
