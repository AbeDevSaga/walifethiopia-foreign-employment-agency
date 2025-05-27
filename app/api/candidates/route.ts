import { NextResponse, NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  console.log("request: ", request);
  // Fetch agent data (replace with your DB/API logic)
  const agent = { id, name: "John Doe", role: "Support Agent" };

  return NextResponse.json(agent);
}