import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const product = getProductById(id);
  return res.status(200).json(product);
}
