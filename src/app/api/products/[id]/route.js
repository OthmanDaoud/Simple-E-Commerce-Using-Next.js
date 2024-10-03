// app/api/products/[id]/route.js
import { NextResponse } from "next/server";
import dbConnect from "../../../db";
import Product from "../../../models/Product";

export async function GET(request, { params }) {
  await dbConnect();
  const product = await Product.findById(params.id);
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(request, { params }) {
  await dbConnect();
  const data = await request.json();
  const product = await Product.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const product = await Product.findByIdAndDelete(params.id);
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ message: "Product deleted successfully" });
}
