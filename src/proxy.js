import { NextResponse } from 'next/server'

export function proxy(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/api/feedback')) {
        return NextResponse.next();
    }

    if (pathname.startsWith('/api/')) {
        return NextResponse.json(
            { message: 'Not Found' },
            { status: 404 }
        )
    }
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: '/api/:path*',
}