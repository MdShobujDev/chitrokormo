import axios from "axios";
import { NextResponse } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL;

export async function POST(req: Request) {
  try {
    const { full_name, phone_number, email, password } = await req.json();
    console.log(full_name, phone_number, email, password);
    const response = await axios.post(`${STRAPI_URL}/api/auth/local/register`, {
      full_name,
      phone_number,
      email,
      password,
    });

    return NextResponse.json(response.data, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
