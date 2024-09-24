import { setupWorker } from 'msw/browser';
import { authHandler } from './authHandler';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...authHandler);