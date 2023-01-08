const { PornHub } = require("pornhub.js");
const pornhub = new PornHub();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//////////////////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//////////////////////////////////////////////////

app.post("/api/video/:keyword", async (req, res) => {
  let { hd, premium, freePremium, production, type } =
    req.body;
  hd = hd === "true" ? true : false;
  premium = premium === "true" ? true : false;
  freePremium = freePremium === "true" ? true : false;
  let productionArray = ["all", "professional", "homemade"];
  if (!productionArray.includes(production)) production = "all";
  if (!type) type = "data";

  let result = pornhub.searchVideo(req.params.keyword, {
    hd,
    production,
  });

  result.then((x) => {
    if (type === "data") {
        let xx = x[type].filter((z) => {
            if (premium) {
                if (z.premium === true) {
                    return z;
                }
            } else if (freePremium) {
                if (z.freePremium === true) {
                    return z;
                }
            } else if (hd) {
                if (z.hd === true) {
                    return z;
                }
            } else {
                return z;
            }
        });
        if (xx.length > 0) {
            res.json(xx);
        } else {
            res.json({ error: "Sonuç Bulunamadı!" });
        }
    } else {
        res.json(x[type]);
    }
  });
});

app.post("/api/model/:keyword", async (req, res) => {
    let { sexualOrientation } = req.body;
    let arr = [
        "straight",
        "gay",
        "transgender"
    ];
    if (!arr.includes(sexualOrientation)) sexualOrientation = "straight";
    let result = pornhub.searchModel(req.params.keyword, {
        sexualOrientation
    });
    result.then((x) => {
        res.json(x);
    });
});

app.post("/api/pornstar/:keyword", async (req, res) => {
    let { page, type } = req.body;
    if (!page) page = 1;
    if (isNaN(page)) page = 1;
    switch (type) {
        case "data":
            type = "data";
            break;
        case "paging":
            type = "paging";
            break;
        case "counting":
            type = "counting";
            break;
        default:
            type = "data";
            break;
    }
    let result = pornhub.searchPornstar(req.params.keyword, {
        page
    });
    result.then((x) => {
        res.json(x[type]);
    });
});

app.post("/api/gif/:keyword", async (req, res) => {
    let { page, type } = req.body;
    if (!page) page = 1;
    if (isNaN(page)) page = 1;
    switch (type) {
        case "data":
            type = "data";
            break;
        case "paging":
            type = "paging";
            break;
        case "counting":
            type = "counting";
            break;
        default:
            type = "data";
            break;
    }
    let result = pornhub.searchGif(req.params.keyword, {
        page
    });
    result.then((x) => {
        res.json(x[type]);
    });
});

app.post("/api/album/:keyword", async (req, res) => {
    let { page, type } = req.body;
    if (!page) page = 1;
    if (isNaN(page)) page = 1;
    switch (type) {
        case "data":
            type = "data";
            break;
        case "paging":
            type = "paging";
            break;
        case "counting":
            type = "counting";
            break;
        default:
            type = "data";
            break;
    }
    let result = pornhub.searchAlbum(req.params.keyword, {
        page
    });
    result.then((x) => {
        res.json(x[type]);
    });
});

app.post("/api/video/detail/:id", async (req, res) => {
    try {
        let result = pornhub.webMaster.getVideo(req.params.id).catch((e) => {
            res.json({ error: "Video Bulunamadı!" });
        });
        result.then((x) => {
          res.json(x);
        });
    } catch (e) {
        res.json({ error: "Video Bulunamadı!" });
    }
});

app.post("/api/video/embed/:id", async (req, res) => {
    try {
        let result = pornhub.webMaster.getVideoEmbedCode(req.params.id).catch((e) => {
            res.json({ error: "Video Bulunamadı!" });
        });
        result.then((x) => {
            x = x.replace('<iframe src="', "");
            x = x.replace('" frameborder="0" width="560" height="340" scrolling="no" allowfullscreen></iframe>', "");
            res.json({ embed: x });
        });
    } catch (e) {
        res.json({ error: "Video Bulunamadı!" });
    }
});

app.post("/api/get/categories", async (req, res) => {
    try {
        let result = pornhub.webMaster.getCategories();
        result.then((x) => {
            res.json(x);
        });
    } catch (e) {
        res.json({ error: "Video Bulunamadı!" });
    }
});

app.post("/api/get/tags", async (req, res) => {
    try {
        let result = pornhub.webMaster.getTags();
        result.then((x) => {
            res.json(x);
        });
    } catch (e) {
        res.json({ error: "Video Bulunamadı!" });
    }
});

app.post("/api/get/pornstars", async (req, res) => {
    try {
        let result = pornhub.webMaster.getPornstars();
        result.then((x) => {
            res.json(x);
        });
    } catch (e) {
        res.json({ error: "Video Bulunamadı!" });
    }
});

app.use((req, res, next) => {
    res.status(404).json({ error: "404 - Sayfa Bulunamadı!" });
});

app.listen(80, () => {
    console.log(`Api Başlatıldı! Port: 80`);
});