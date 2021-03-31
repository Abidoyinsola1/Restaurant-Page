const home = () => {
    const title = document.createElement('h2');
    title.className = 'hometitle text-center';
    title.innerHTML = "Hey Yum! It's good to have you @ Emmanuel's Place";
    title.id = 'title';

    return title;
};

export default home();