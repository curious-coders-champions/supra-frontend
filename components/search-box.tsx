import { SearchIcon } from "lucide-react";

export function SearchBox() {
    return <div className="flex h-10 items-center gap-2 w-full border rounded-xl px-2">
        <SearchIcon  className="shrink-0 text-secondary" />
        <input placeholder="Search" className="bg-transparent border-none w-full focus:outline-none outline-none  focus:border-none focus:ring-0" />
    </div>
}
