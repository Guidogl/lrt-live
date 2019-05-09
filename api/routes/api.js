const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getShowName(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  const div = $('[data-tvprogname="LTV1"] .channel-item__title');
  return div.html();
}

async function getShowTime(html) {
  const $ = cheerio.load(html);
  const div = $('[data-tvprogname="LTV1"] .data-block__text');
  return div.html();
}

router.get("/", async function(req, res, next) {
  const html = await getHTML(
    "https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija"
  );
  const name = await getShowName(html);
  const time = await getShowTime(html);
  return axios
    .post("https://a81f7cb9.eu-gb.apiconnect.appdomain.cloud/show/data", {
      name: name,
      time: time
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
});
module.exports = router;
