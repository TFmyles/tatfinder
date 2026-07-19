// Browser shim for next/server. Sync-preview only.
export class NextResponse {
  static json(data: any, init?: any) { return { data, init }; }
  static redirect(url: any) { return { url }; }
  static next() { return {}; }
  static rewrite(url: any) { return { url }; }
}
export class NextRequest {}
export const userAgent = () => ({});
