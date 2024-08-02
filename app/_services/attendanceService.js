import { db } from "@/utils/db"
import { ATTENDANCE, STUDENTS } from "@/utils/schema"
import { eq, isNull, or } from "drizzle-orm"

const getAttendanceList = async (grades, month) => {
    const result = await db.select({
        name: STUDENTS?.name,
        present: ATTENDANCE?.present,
        day: ATTENDANCE?.day,
        date: ATTENDANCE?.date,
        grade: STUDENTS?.grade,
        studentId: STUDENTS?.id,
        attendanceId: ATTENDANCE?.id
    })
        .from(STUDENTS)
        .leftJoin(ATTENDANCE, eq(STUDENTS?.id, ATTENDANCE?.studentId))
        .where(eq(STUDENTS?.grade, grades))
        .where(or(eq(ATTENDANCE?.date, month), isNull(ATTENDANCE?.date)))

    return result
}

export default {
    getAttendanceList
}