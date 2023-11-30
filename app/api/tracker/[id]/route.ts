import { TaskSchema } from "@/app/validationSchema";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function PATCH(request: NextRequest, {params}: {params: {id: string}}){

    const body = await request.json();

    const validation = await TaskSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const task = await prisma.tracker.findUnique({
        where: { id: parseInt(params.id)}
    });

    if (!task)
        return NextResponse.json({error: 'Invalid Task'}, {status: 404})

    const updatedTask = await prisma.tracker.update({
        where: { id: task.id},
        data: {
            title: body.title,
            description: body.description,
        }
    });

    return NextResponse.json(updatedTask);

}