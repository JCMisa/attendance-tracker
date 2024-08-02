import { db } from "@/utils/db"
import { ATTENDANCE, STUDENTS } from "@/utils/schema"
import { and, desc, eq, or, sql } from "drizzle-orm"

export const totalPresentCountByDay = async (date, grade) => {
    const result = await db.select({
        day: ATTENDANCE?.day,
        presentCount: sql`count(${ATTENDANCE?.day})::int`
    })
        .from(ATTENDANCE)
        .leftJoin(STUDENTS, and(
            eq(ATTENDANCE?.date, date),
            eq(ATTENDANCE?.studentId, STUDENTS?.id)
        ))
        .groupBy(ATTENDANCE?.day)
        .where(eq(STUDENTS?.grade, grade))
        .orderBy(ATTENDANCE?.day)
        .limit(7)

    return result
}

export default {
    totalPresentCountByDay
}