import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { migrate, useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '@/drizzle/migrations';
import { sql } from 'drizzle-orm';

const expo = SQLite.openDatabaseSync('db.db');
const db = drizzle(expo);

export async function runMigrations() {
    let hasNewMigrationsToApply = false;
    const latestMigrationEntry = migrations.journal.entries[migrations.journal.entries.length - 1];
    let mostRecentMigration: { created_at: number } | null = null;
    try {
        mostRecentMigration = await db.get(sql`select * from __drizzle_migrations ORDER BY created_at DESC LIMIT 1`);
        if(mostRecentMigration && latestMigrationEntry.when > mostRecentMigration.created_at ){
            hasNewMigrationsToApply = true;
        }

    } catch (error) {
        console.error("Error fetching most recent migration:", error);
    }

    try {
        await migrate(db, migrations);
        return { success: true, error: null, hasNewMigrationsToApply };
    } catch (error : any) {
        return { success: false, error, hasNewMigrationsToApply : false };
    }
}

export { db, expo };