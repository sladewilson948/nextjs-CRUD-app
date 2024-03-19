import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";



export async function POST(request) {

    const { title, description } = await request.json();
    await connectMongoDB()
    await Topic.create({ title, description })
    return NextResponse.json({ message: { "message": "topic has been successfuly created !!!" } }, { status: 201 })

}


export async function GET() {

    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({ topics }, {status: 200})
}




export async function DELETE(request) {

    //we need an id to delete the data from the database!!
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Data successfuly deleted from the database!!"}, { status: 201 })
}