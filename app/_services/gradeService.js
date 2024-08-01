import { db } from "@/utils/db"
import { GRADES } from "@/utils/schema"

const getAllGrades = async () => {
    const result = await db.select().from(GRADES)
    return result
}


export default {
    getAllGrades
}