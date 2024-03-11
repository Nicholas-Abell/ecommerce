import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prisma from "@/lib/prisma/prisma";

export async function GET(
  req: Request,
  { params }: { params: { catagoryId: string } }
) {
  try {
    if (!params.catagoryId) {
      return new NextResponse("Catagory id is required", { status: 400 });
    }

    const catagory = await prisma.catagory.findUnique({
      where: {
        id: params.catagoryId,
      },
    });

    return NextResponse.json(catagory);
  } catch (error) {
    console.log("[CATAGORY_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { catagoryId: string; storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.catagoryId) {
      return new NextResponse("Catagory id is required", { status: 400 });
    }

    const storeByUserId = await prisma.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const catagory = await prisma.catagory.delete({
      where: {
        id: params.catagoryId,
      },
    });

    return NextResponse.json(catagory);
  } catch (error) {
    console.log("[CATAGORY_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { catagoryId: string; storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, billboardId } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Label is required", { status: 400 });
    }

    if (!billboardId) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    if (!params.catagoryId) {
      return new NextResponse("Catagory id is required", { status: 400 });
    }

    const storeByUserId = await prisma.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const catagory = await prisma.catagory.updateMany({
      where: {
        id: params.catagoryId,
      },
      data: {
        name,
        billboardId,
      },
    });

    return NextResponse.json(catagory);
  } catch (error) {
    console.log("[CATAGORY_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
