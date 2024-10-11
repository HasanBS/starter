import db from "@/db";


export async function getGuestbookEntries(userId: string) {
    return await db.query.guestbookEntries.findMany({
        where(fields, operators) {
            return operators.eq(fields.userId, userId);
        },
        orderBy(fields, operators) {
            return operators.desc(fields.createdAt);
        },
        with: {
            user: true,
        },
    });
}

export async function getTenant(userId: string) {
    return await db.query.tenants.findFirst({
        where(fields, operators) {
            return operators.eq(fields.userId, userId);
        },
        with: {
            user: true,
        },
    });
}

