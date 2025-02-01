import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { SearchBar } from "./components/SearchBar";
import { SnippetList } from "./components/SnippetList";
import { SnippetModal } from "./components/SnippetModal";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100  h-screen">
      <Header/>
       <main className="container mx-auto grid grid-cols-12 gap-6 mt-6 h-full">
        <Sidebar/>

        <section className="col-span-10 bg-white rounded-lg shadow-md p-6">
    <SearchBar/>
    <SnippetList/>
    <button
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Add New Snippet
      </button>
        </section>
      </main>
    <SnippetModal/>
    </div>
  );
}
