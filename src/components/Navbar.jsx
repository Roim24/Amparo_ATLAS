import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-slate-900/50 border-b border-slate-800 px-6 py-4 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-2xl font-bold text-red-400">
                        Amparo ATLAS
                    </Link>
                    <Link
                        to="/students"
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800/50 hover:text-red-400"
                    >
                        Students
                    </Link>
                    <Link
                        to="/faculty"
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800/50 hover:text-red-400"
                    >
                        Faculty
                    </Link>
                </div>
            </div>
        </nav>
    );
}
                
                     