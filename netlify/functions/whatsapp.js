export async function handler(event, context) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER; // secure in Netlify
  const params = new URLSearchParams(event.queryStringParameters);
  const product = params.get("product") || "a product";

  return {
    statusCode: 302,
    headers: {
      Location: `https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20purchasing%20the%20${encodeURIComponent(product)}`
    }
  };
}
