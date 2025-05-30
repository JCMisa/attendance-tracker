import { db } from "@/utils/db"
import { STUDENTS } from "@/utils/schema"
import { eq } from "drizzle-orm"

const addStudent = async (data) => {
    const result = await db.insert(STUDENTS).values({
        name: data?.name,
        grade: data?.grade,
        address: data?.address,
        contact: data?.contact
    })
    return result
}

const getAllStudents = async () => {
    const result = await db.select().from(STUDENTS)
    return result
}

const deleteStudent = async (id) => {
    const result = await db.delete(STUDENTS).where(eq(STUDENTS.id, id))
    return result
}

export default {
    addStudent,
    getAllStudents,
    deleteStudent
}