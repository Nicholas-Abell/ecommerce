import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, billboardId } = body;

    if (!userId) {
      return new NextResponse("Unauthenitcated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!billboardId) {
      return new NextResponse("Billboard Id is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("storeId is required", { status: 400 });
    }

    const storeByUserId = await prisma.store.findFirst({
      where: { id: params.storeId, userId },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const catagory = await prisma.catagory.create({
      data: { name, billboardId, storeId: params.storeId },
    });

    return NextResponse.json(catagory);
  } catch (error) {
    console.log("[CATAGORY_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(
  _req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("storeId is required", { status: 400 });
    }

    const catagory = await prisma.catagory.findMany({
      where: { storeId: params.storeId },
    });

    return NextResponse.json(catagory);
  } catch (error) {
    console.log("[CATAGORY_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
