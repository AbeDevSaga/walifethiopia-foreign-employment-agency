import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const protectedRoutes = ['/dashboard'];
const adminRoutes = ['/dashboard/admin'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  if (!isProtectedRoute) return NextResponse.next();

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { 
      userId: string; 
      role: string 
    };

    // Check admin routes
    const isAdminRoute = adminRoutes.some(route => path.startsWith(route));
    if (isAdminRoute && decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard/agent', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // Invalid token
    console.error('JWT verification failed:', error);
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};