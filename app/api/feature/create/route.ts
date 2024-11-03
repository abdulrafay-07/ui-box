import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import { featureSchema } from "@/schemas/feature";

export async function POST(request: NextRequest) {
   const validatedFields = featureSchema.safeParse(await request.json());

   if (!validatedFields.success) {
      return NextResponse.json({
         success: false,
         message: "Invalid fields!",
      }, { status: 404 });
   };

   const { name, description } = validatedFields.data;

   try {
      const feature = await db.componentRequest.create({
         data: {
            name,
            description,
         },
      });

      return NextResponse.json({
         success: true,
         message: "Request submitted successfully!",
      }, { status: 200 });
   } catch (error) {
      return NextResponse.json({
         success: false,
         message: "Internal Error!",
      }, { status: 500 });
   };
};