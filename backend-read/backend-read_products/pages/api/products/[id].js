import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === `GET`) {
    const product = await Product.findById(id);

    if (!product) {
      response.status(404).json({ status: `Product not found` });
    }
    response.status(200).json(product);
  }
  response.status(405).json({ status: `Method not allowed.` });
}
