import { NextResponse, NextRequest } from 'next/server';

type RouteParams = {
  params: {
    id: string
  }
}

export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  const { params } = context;
  const { id } = params;
  
  console.log("request: ", request);
  // Fetch agent data (replace with your DB/API logic)
  const agent = { id, name: "John Doe", role: "Support Agent" };

  return NextResponse.json(agent);
}