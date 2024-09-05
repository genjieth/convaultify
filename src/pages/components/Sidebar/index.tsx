import Link from "next/link";

const Sidebar = () => {
  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-gray`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/my-groups"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-gray}`}
                >
                  My Groups
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Link
          href="/create-group"
          className=" my-8 mx-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-900 dark:bg-blue-600 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Create New Group
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;