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

function displayList () {
  const listMenu = document.querySelector('#list');

  menu.forEach(function (item) {
    const itemMenu = document.createElement("li");
    itemMenu.classList.add("item_menu");
    itemMenu.innerHTML = item.name;
    listMenu.appendChild(itemMenu);

    itemMenu.addEventListener("mouseover", () => {
      // event.target.classList.add("submenu_visible");
      // itemMenu.classList.toggle("submenu_visible");
    })

    if (item.submenu) {
      const listSubmenu = document.createElement("ul");
      listSubmenu.classList.add("submenu");
      itemMenu.append(listSubmenu);

      item.submenu.forEach(function (elem) {
        const itemSubMenu = document.createElement("li");
        itemSubMenu.classList.add("item_submenu")
        itemSubMenu.innerHTML = elem.name;
        listSubmenu.appendChild(itemSubMenu);

        if (elem.submenu) {
          const listSubSubmenu = document.createElement("ul");
          itemSubMenu.append(listSubSubmenu);

          elem.submenu.forEach(function (subElem) {
            const itemSubSubMenu = document.createElement("li");
            itemSubSubMenu.innerHTML = subElem.name;
            listSubSubmenu.appendChild(itemSubSubMenu)
          });
        };
        
      });

    };

  });

  
}

displayList();

