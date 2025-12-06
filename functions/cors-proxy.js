exports.handler = async (event) => {
  const url = event.queryStringParameters.url;

  const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });

  return {
    statusCode: r.status,
    headers: { "Content-Type": r.headers.get("Content-Type") },
    body: Buffer.from(await r.arrayBuffer()).toString("base64"),
    isBase64Encoded: true
  };
};
