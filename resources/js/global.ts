/**
 * define global variables for SSR.
 */

// @ts-ignore
global.File = typeof window === 'undefined' ? Object : window.File
