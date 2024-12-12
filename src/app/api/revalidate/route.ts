import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const path = req.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
