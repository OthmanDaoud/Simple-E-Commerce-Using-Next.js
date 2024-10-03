// app/api/products/route.js
import { NextResponse } from "next/server";
import dbConnect from "../../db";
import Product from "../../models/Product";

export async function GET() {
  await dbConnect();
  const products = await Product.find({});
  return NextResponse.json(products);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const product = await Product.create(data);
  return NextResponse.json(product, { status: 201 });
}
