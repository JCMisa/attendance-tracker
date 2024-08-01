import { db } from "@/utils/db"
import { GRADES } from "@/utils/schema"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await db.select().from(GRADES)
    return NextResponse.json(data)
}