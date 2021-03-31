const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('container');

  const menuHeader = document.createElement('h2');
  menuHeader.innerText = 'OUR SUMPTUOUS MENU';
  menuHeader.className = 'text-center text-white';

  const itemContainer = document.createElement('div');
  itemContainer.className = 'row item-container';

  const menuOne = document.createElement('div');
  menuOne.className = 'card col-4 p-3 m-3';
  const menuOneName = document.createElement('h5');
  menuOneName.className = 'card-title text-center';
  menuOneName.innerText = 'Jollof Rice';
  const menuOneDesc = document.createElement('div');
  menuOneDesc.className = 'card-text text-center';
  menuOneDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum in veniam, minus voluptatem id, architecto quod soluta debitis eius iusto porro adipisci? Perferendis iste, impedit soluta dolorum cum dolorem?';

  menuOne.appendChild(menuOneName);
  menuOne.appendChild(menuOneDesc);


  const menuTwo = document.createElement('div');
  menuTwo.className = 'card col-4 p-3 m-3';
  const menuTwoName = document.createElement('h5');
  menuTwoName.className = 'card-title text-center';
  menuTwoName.innerText = 'Coconut Rice';
  const menuTwoDesc = document.createElement('div');
  menuTwoDesc.className = 'card-text text-center';
  menuTwoDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum in veniam, minus voluptatem id, architecto quod soluta debitis eius iusto porro adipisci? Perferendis iste, impedit soluta dolorum cum dolorem?';

  menuTwo.appendChild(menuTwoName);
  menuTwo.appendChild(menuTwoDesc);

  const menuThree = document.createElement('div');
  menuThree.className = 'card col-4 p-3 m-3';
  const menuThreeName = document.createElement('h5');
  menuThreeName.className = 'card-title text-center';
  menuThreeName.innerText = 'Fried Rice';
  const menuThreeDesc = document.createElement('div');
  menuThreeDesc.className = 'card-text text-center';
  menuThreeDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum in veniam, minus voluptatem id, architecto quod soluta debitis eius iusto porro adipisci? Perferendis iste, impedit soluta dolorum cum dolorem?';

  menuThree.appendChild(menuThreeName);
  menuThree.appendChild(menuThreeDesc);

  const menuFour = document.createElement('div');
  menuFour.className = 'card col-4 p-3 m-3';
  const menuFourName = document.createElement('h5');
  menuFourName.className = 'card-title text-center';
  menuFourName.innerText = 'Yam & Sauce';
  const menuFourDesc = document.createElement('div');
  menuFourDesc.className = 'card-text text-center';
  menuFourDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum in veniam, minus voluptatem id, architecto quod soluta debitis eius iusto porro adipisci? Perferendis iste, impedit soluta dolorum cum dolorem?';

  menuFour.appendChild(menuFourName);
  menuFour.appendChild(menuFourDesc);

  const menuFive = document.createElement('div');
  menuFive.className = 'card col-4 p-3 m-3';
  const menuFiveName = document.createElement('h5');
  menuFiveName.className = 'card-title text-center';
  menuFiveName.innerText = 'Yamarita';
  const menuFiveDesc = document.createElement('div');
  menuFiveDesc.className = 'card-text text-center';
  menuFiveDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum in veniam, minus voluptatem id, architecto quod soluta debitis eius iusto porro adipisci? Perferendis iste, impedit soluta dolorum cum dolorem?';

  menuFive.appendChild(menuFiveName);
  menuFive.appendChild(menuFiveDesc);

  const menuSix = document.createElement('div');
  menuSix.className = 'card col-4 p-3 m-3';
  const menuSixName = document.createElement('h5');
  menuSixName.className = 'card-title text-center';
  menuSixName.innerText = 'Yam Pottage';
  const menuSixDesc = document.createElement('div');
  menuSixDesc.className = 'card-text text-center';
  menuSixDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum in veniam, minus voluptatem id, architecto quod soluta debitis eius iusto porro adipisci? Perferendis iste, impedit soluta dolorum cum dolorem?';

  menuSix.appendChild(menuSixName);
  menuSix.appendChild(menuSixDesc);

  itemContainer.appendChild(menuOne);
  itemContainer.appendChild(menuTwo);
  itemContainer.appendChild(menuThree);
  itemContainer.appendChild(menuFour);
  itemContainer.appendChild(menuFive);
  itemContainer.appendChild(menuSix);
  menuContainer.appendChild(menuHeader);
  menuContainer.appendChild(itemContainer);

  return menuContainer;
};

export default menu();