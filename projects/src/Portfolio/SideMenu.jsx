import React from 'react';
import { NavLink } from 'react-router';

const SideMenu = () => {
  const Items = [
    { path: "/main", itemName: "CardSection" },
    { path: "/main/list", itemName: "List" },
    { path: "/main/task", itemName: "TodosTask" }
  ];

  return (
    <div className='w-[20%] h-full fixed left-0 top-0 bottom-0'>
      <div className="h-20 bg-amber-700"></div>
      <div className="h-full bg-indigo-200 flex flex-col gap-4 p-4">
        {Items.map(({ path, itemName },index ) => (
          <NavLink
            to={path}
            key={index}
            className={({ isActive }) =>
              `w-full py-2 px-4 ${
                isActive ? "bg-amber-500 text-white" : "text-gray-700"
              } rounded text-center`
            }
            end
          >
            {itemName}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
