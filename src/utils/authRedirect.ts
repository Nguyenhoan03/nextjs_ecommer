import { useRouter } from "next/navigation";

export function redirectToLogin(router: ReturnType<typeof useRouter>) {
  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname + window.location.search;
    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
  }
}
