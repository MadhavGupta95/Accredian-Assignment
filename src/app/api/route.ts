import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const formValues = await req.json();

  if (!formValues) {
    return NextResponse.json({ message: "Form is empty" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "db", "mydb.json");

  const file = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(file);

  data.push(formValues);

  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({
    message: "Saved successfully",
  });
}
