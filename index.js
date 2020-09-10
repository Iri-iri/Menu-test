const menu = [
    {
      name: "Пункт 1",
      submenu: [
        { name: "Пункт 1.1" },
        { name: "Пункт 1.2" },
        {
          name: "Пункт 1.3",
          submenu: [{ name: "Пункт 1.3.1" }, { name: "Пункт 1.3.2" }],
        },
      ],
    },
    {
      name: "Пункт 2",
    },
    {
      name: "Пункт 3",
      submenu: [
        { name: "Пункт 3.1" },
        { name: "Пункт 3.2" },
        { name: "Пункт 3.3" },
        { name: "Пункт 3.4" },
      ],
    },
];


const listMenu = document.querySelector('#list');

menu.forEach(function (item) {
const itemMenu = document.createElement("li");
itemMenu.innerHTML = item.name;
listMenu.appendChild(itemMenu);

if (item.submenu) {
const listSubmenu = document.createElement("ul");
itemMenu.append(listSubmenu);
};
})


if (menu.submenu) {
  menu.submenu.forEach(function (item) {
    const itemSubMenu = document.createElement("li");
    itemSubMenu.innerHTML = item.name;
    listSubmenu.appendChild(itemSubMenu);
  });
}