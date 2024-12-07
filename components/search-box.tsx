import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export function SearchBox() {
    return <div className="flex h-10 items-center gap-2 w-full">
        <SearchIcon className="shrink-0" />
        <Input className="bg-transparent w-full focus:outline-none, focus:border-none focus:ring-0" />
    </div>
}
