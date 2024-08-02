import { db } from "@/utils/db"
import { ATTENDANCE, STUDENTS } from "@/utils/schema"
import { and, eq, isNull, or } from "drizzle-orm"

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

const markAttendance = async (data) => {
    const result = await db.insert(ATTENDANCE).values({
        studentId: data.studentId,
        present: data.present,
        day: data.day,
        date: data.date
    })

    return result
}

const markAbsent = async (studentId, day, date) => {
    const result = await db.delete(ATTENDANCE)
        .where(and(
            eq(ATTENDANCE?.studentId, studentId),
            eq(ATTENDANCE?.day, day),
            eq(ATTENDANCE?.date, date)))

    return result
}

export default {
    getAttendanceList,
    markAttendance,
    markAbsent
}