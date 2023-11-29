import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createTrackerSchema } from "../../validationSchema";

export async function POST(request: NextRequest){
    const body = await request.json();

    const validation = createTrackerSchema.safeParse(body);

    if(!validation.success){
        return (validation.error.errors, {status: 400});
    }

    const newTracker = await prisma.tracker.create({
        data: { title: body.title, description: body.description}
    });

    return NextResponse.json(newTracker, {status:201});
}