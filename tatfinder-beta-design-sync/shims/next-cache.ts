// Browser shim for next/cache. Sync-preview only.
export const revalidatePath = () => {};
export const revalidateTag = () => {};
export const unstable_cache = (fn: any) => fn;
export const unstable_noStore = () => {};
