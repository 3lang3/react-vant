export default function canUseDom(): boolean {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
