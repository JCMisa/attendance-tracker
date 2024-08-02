import {
    boolean,
    integer,
    numeric,
    pgTable,
    serial,
    text,
    varchar,
} from "drizzle-orm/pg-core";

export const GRADES = pgTable("grades", {
    id: serial("id").primaryKey(),
    grade: varchar("grade", { length: 10 }).notNull()
});

export const STUDENTS = pgTable("students", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    grade: varchar("grade", { length: 10 }).notNull(),
    address: varchar("address"),
    contact: varchar("contact"),
})

export const ATTENDANCE = pgTable("attendance", {
    id: serial("id").primaryKey(),
    studentId: integer("studentId").notNull(),
    present: boolean("present").default(false),
    day: integer("day").notNull(),
    date: varchar("date").notNull(),
})