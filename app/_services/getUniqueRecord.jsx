// get the distinct user
export const getUniqueRecord = (attendanceList) => {
    const uniqueRecord = [];
    const existingUser = new Set();

    attendanceList && attendanceList?.forEach(record => {
        if (!existingUser.has(record.studentId)) {
            existingUser.add(record.studentId)
            uniqueRecord.push(record)
        }
    });

    return uniqueRecord
}