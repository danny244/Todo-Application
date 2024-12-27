import { Link } from "react-router";

export function NotFound() {
    return (
        <div className="w-h-inherit flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-1">
                <h1 className="font-bold text-[6rem] ">404</h1>
                Page Not Found

                <Link to={'/'} className="py-1 px-8 w-fit bg-slate-950 mt-3 ">
                    Back To Home
                </Link>
            </div>
        </div>
    )
}