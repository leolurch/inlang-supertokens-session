import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 *
 */
export async function key_set_policies() {
    await prisma.$queryRawUnsafe(`
        ALTER TABLE public.key ENABLE ROW LEVEL SECURITY;
    `);
    await prisma.$queryRawUnsafe(`
        DROP POLICY IF EXISTS "user all keys" ON public.key;
    `)
    await prisma.$queryRawUnsafe(`
        CREATE POLICY "user all keys" ON public.key
        FOR ALL
        USING (
            project_id IN (
                SELECT id FROM project
            )
        );
    `);
    console.log("✅ applied policies for: key table");
}
