import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { db, runMigrations } from '@/db/dbInstance';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '@/drizzle/migrations';

export default function App() {
  const [migrationState, setMigrationState] = useState<{ 
    success: boolean;
    error?: Error;
    hasNewMigrationsToApply: boolean;
  } | null>(null);

  // const { success, error } = useMigrations(db, migrations);

  useEffect(() => {
    async function performMigration() {
          const result = await runMigrations();
          console.log('yeah!');
          console.log(result);
          setMigrationState({
              success: result.success,
              error: result.error,
              hasNewMigrationsToApply: result.hasNewMigrationsToApply,
          });
        }
      performMigration();
  }, [])

  // useEffect(() => {
  //   if(!success && error) {
  //     console.error("Migration failed:", error);
  //   }
  //   if(success) {
  //     console.log("Migration succeeded");
  //   }
  // }, [success, error]);

  return (
    <View>
      <Text>Drizzle ORM with Expo SQLite</Text>
      {migrationState && (
        <View>
          <Text>Migration State:</Text>
          <Text>Success: {migrationState.success ? 'oui' : 'non'}</Text>
          {migrationState.error && <Text>Error: {migrationState.error.message}</Text>}
          <Text>Applied New Migrations: {migrationState.hasNewMigrationsToApply ? 'oui' : 'non'}</Text>
        </View>
      )}
    </View>
  )
}
