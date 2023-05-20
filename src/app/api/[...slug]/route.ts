import { NextRequest, NextResponse } from "next/server";

const apiUrl = "http://localhost:3003";

export async function GET(req: NextRequest, { params }: any) {
  const [handle = "liiinx", pageName = "home"] = params.slug;

  const pageData = await fetch(
    `${apiUrl}/websites/${handle}/pages/${pageName}`
  ).then((data) => data.json());

  return NextResponse.json(pageData);
}
