import { SearchForm } from "@/components/SearchForm";
import { SelectOptions } from "@/components/SelectOptions";

export default function Home() {
  return (
    <div className="flex h-full select-none">
      <div className="bg-slate-900 flex justify-center items-center w-full">
        <div className="w-[500px] flex flex-col gap-2">
          <SearchForm />
          <SelectOptions />
        </div>
      </div>
    </div>
  );
}
