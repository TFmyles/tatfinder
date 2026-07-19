// Browser shim for next/navigation — inert router. Sync-preview only.
const noop = () => {};
export const useRouter = () => ({ push: noop, replace: noop, back: noop, forward: noop, refresh: noop, prefetch: noop });
export const usePathname = () => '/';
export const useSearchParams = () => new URLSearchParams();
export const useParams = () => ({});
export const useSelectedLayoutSegment = () => null;
export const useSelectedLayoutSegments = () => [];
export const redirect = noop;
export const notFound = noop;
