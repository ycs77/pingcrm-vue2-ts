declare module '@inertiajs/inertia' {
  interface PageProps {
    auth: import('./types').Auth
    flash: {
      success: string | null
      error: string | null
    }
  }
}

export {}
