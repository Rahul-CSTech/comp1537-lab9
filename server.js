
const express = require("express")
const app = express();
const cors = require("cors")


app.use(cors())

app.listen(3000, () => {
    console.log("the server is listening on 3000");
});

app.get("/getWeatherForACityByName", (req, res)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=59c904eee26bb7a54ba883aa3c39f175&units=metric`
)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        res.json(resp);

    })
    .catch((err) => {
        console.log(err);
    });

});