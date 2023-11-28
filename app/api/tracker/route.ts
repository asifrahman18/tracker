import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import prisma from "@/prisma/client";

const createTrackerSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
});

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