# Porn Hub Api With Express

## 🏗️ Example 🏗️

```javascript
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
   
});
var config = {
  method: 'post',
  url: 'http://localhost/api/get/pornstars',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```


# ⚓ End Points ⚓

```http
  POST /api/get/pornstars
```
##
```http
  POST /api/get/tags
```

##
```http
  POST /api/get/categories
```

##
```http
  POST /api/video/embed/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

##
```http
  POST /api/video/detail/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

##
```http
  POST /api/video/album/${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Name of item to fetch |

- Form Data

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | Page of item to fetch |

| Parameter | Types     |
| :-------- | :------- |
| `type`      | `data`, `paging`, `counting` | 

##
```http
  POST /api/video/gif/${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Name of item to fetch |

- Form Data

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | Page of item to fetch |

| Parameter | Types     |
| :-------- | :------- |
| `type`      | `data`, `paging`, `counting` | 

##
```http
  POST /api/video/pornstar/${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Name of item to fetch |

- Form Data

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | Page of item to fetch |

| Parameter | Types     |
| :-------- | :------- |
| `type`      | `data`, `paging`, `counting` | 

##
```http
  POST /api/video/model/${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Name of item to fetch |

- Form Data

| Parameter | Types     |
| :-------- | :------- |
| `sexualOrientation`      | `straight`, `gay`, `transgender` | 

##
```http
  POST /api/video/${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Name of item to fetch |

- Form Data

| Parameter | Types     |
| :-------- | :------- |
| `hd`      | `true`, `false` | 
| `premium`      | `true`, `false` | 
| `freePremium`      | `true`, `false` | 
| `production`      | `all`, `professional`, `homemade` | 
| `type`      | `data`, `paging`, `counting` | 


# 🛠️ Installation 🛠️

- Download and install [NodeJs](https://nodejs.org/en/download) on your computer.
- Download the project as Zip to your computer and unzip it.
- Enter the folder you extracted from the zip and open a terminal to the location of that folder, then enter the following commands.
`npm install`
- Start the bot by entering the following command in Terminal
`node .`

## ⛳Tech Stack ⛳

**🗄️Server:** Node, PornHub.Js, Express, body-parser

---
- ✨ [For Support](https://github.com/sponsors/fastuptime) <br>
- 💕 [Discord](https://fastuptime.com/discord)<br>
- 🏓 [Fast Uptime](https://fastuptime.com/)<br>
- 🪄 All kinds of projects are made <br>
- 🧨 You can contact us to make a paid project<br>
- ☄️ [Click For Contact](mailto:fastuptime@gmail.com)<br>

# 🎯 License 🎯
- ⚖️ Its protected by Creative Commons ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/))

<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" title="BYNCSA40"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"></a>
