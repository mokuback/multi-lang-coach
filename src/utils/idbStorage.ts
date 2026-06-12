/**
 * IndexedDB Storage — async replacement for localStorage for large datasets.
 * Config/settings remain in localStorage (too small for IDB overhead).
 */

const DB_NAME = 'MultiLangCoachDB';
const DB_VERSION = 1;

const STORES = {
  vocabulary: 'vocabulary',
  patterns: 'patterns',
  progress: 'progress',
  chatHistory: 'chatHistory',
} as const;

export type IDBStoreName = keyof typeof STORES;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      for (const storeName of Object.values(STORES)) {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName); // key-value, key = store name itself
        }
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function idbGet<T>(store: IDBStoreName, key: string): Promise<T | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const os = tx.objectStore(store);
    const req = os.get(key);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}

export async function idbSet<T>(store: IDBStoreName, key: string, value: T): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const os = tx.objectStore(store);
    os.put(value, key);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => reject(tx.error);
  });
}

export async function idbDelete(store: IDBStoreName, key: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const os = tx.objectStore(store);
    os.delete(key);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * One-shot migration: copy localStorage data into IndexedDB, then remove the LS keys.
 * Called once on first IDB boot. Safe to call repeatedly — skips if IDB already populated.
 */
export async function migrateFromLocalStorage(): Promise<void> {
  const lsKeyMap: Record<IDBStoreName, string> = {
    vocabulary: 'IT_ENGLISH_APP_VOCABULARY',
    patterns: 'IT_ENGLISH_APP_PATTERNS',
    progress: 'APP_LEARNING_PROGRESS',
    chatHistory: '', // no LS counterpart yet
  };

  for (const store of Object.keys(lsKeyMap) as IDBStoreName[]) {
    const lsKey = lsKeyMap[store];
    if (!lsKey) continue;
    const existing = await idbGet(store, store);
    if (existing) continue; // already migrated
    const raw = localStorage.getItem(lsKey);
    if (raw) {
      try {
        const data = JSON.parse(raw);
        await idbSet(store, store, data);
        localStorage.removeItem(lsKey);
      } catch { /* corrupt data — skip */ }
    }
  }
}