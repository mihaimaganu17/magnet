import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        // Function gets the authenticated user or token 'auth' and the request to be authorized
        // 'nextReq'
        // The authorized callback is used to verify if the request is authorized to access a page
        // with Next.js proxy.
        authorized({auth, request: { nextUrl }}) {
            // Check if the user is logged in by converting the user value (if auth is not null)
            // into a boolean.
            const isLoggedIn = !!auth?.user;
            // Check if the requested url is on dashboard
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            console.log(isLoggedIn);

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                // Redirect unauthenticated users to login page
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        }
    },
    // `providers` is an array to list different login options.
    providers: [],
} satisfies NextAuthConfig;