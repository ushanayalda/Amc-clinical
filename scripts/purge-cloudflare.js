const https = require("https");

const zoneId = process.env.CF_ZONE_ID;
const token = process.env.CF_API_TOKEN;
const baseUrl = (process.env.CF_BASE_URL || "https://ushanayalda.github.io").replace(/\/$/, "");
const paths = [
  "/Amc-clinical/",
  "/Amc-clinical/index.html",
  "/Amc-clinical/404.html"
];

if (!zoneId || !token) {
  console.log("Cloudflare purge skipped. Set CF_ZONE_ID and CF_API_TOKEN to enable it.");
  process.exit(0);
}

const body = JSON.stringify({
  files: paths.map((item) => baseUrl + item)
});

const request = https.request(
  {
    method: "POST",
    hostname: "api.cloudflare.com",
    path: `/client/v4/zones/${zoneId}/purge_cache`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  },
  (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        console.error(`Cloudflare purge failed with HTTP ${response.statusCode}: ${data}`);
        process.exit(1);
      }
      console.log("Cloudflare purge requested.");
    });
  }
);

request.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});

request.write(body);
request.end();
