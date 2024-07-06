import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const POST = async (request: Request) => {
    console.log(`POST /api/auth`)
    const data = await request.json();
    console.log(data)
    try {
        let success = 0
        if (data.username=="umair.anwr@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="nine7t@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="mmdgk@yahoo.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="ddssmckl@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="ddmmmianwali@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="ddmmsargodha8@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="ddrwpregion@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="ddssmkhb@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="ddmmlhr@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="mmddmultan@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="ddmmgwa@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="admmattock@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="admm_chiniot@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="admmskt@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="admmjhelum@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="swladmm@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        else if (data.username=="bwpadmm@gmail.com" || data.password=="qwerty") {
            success = 1
        }
        return new NextResponse(JSON.stringify({"success": success}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(`dev: ${error}`);
        console.error(`data: ${JSON.stringify(data)}`)
        new NextResponse(JSON.stringify(error), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    } finally {
        await prisma.$disconnect();
    }
}
