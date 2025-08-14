import Image from "next/image";
import { SidebarMenuItem, SidebarMenuItemProps } from "./SidebarMenuItem";
import { CiHome } from "react-icons/ci";
import { AiOutlineNumber } from "react-icons/ai";
import { MdCatchingPokemon } from "react-icons/md";
import { IoHeartCircleOutline } from "react-icons/io5";

const menuItems: SidebarMenuItemProps[] = [
  {
    path: "/dashboard",
    icon: <CiHome className="w-6 h-6 text-white" />,
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <AiOutlineNumber className="w-6 h-6 text-white" />,
    title: "Counter",
    subtitle: "Contador client side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <MdCatchingPokemon className="w-6 h-6 text-white" />,
    title: "Pokemons",
    subtitle: "Generacion estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartCircleOutline className="w-6 h-6 text-white" />,
    title: "Favorites",
    subtitle: "Global state",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 overflow-y-scroll w-[400px]"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Abdiel Licona</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
