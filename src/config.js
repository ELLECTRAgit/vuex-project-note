export const process = {
    dev: true,
};

export const site = {
home: process.dev ? "http://192.168.32.105:8080/" : "https://tocode.ru",
};
// Описание текущего приложения
export const app = {
    title: "Notes",
};

export const links = [
            {
                title: "Home",
                alias: "home",
                url: "/",
            },
                            {
                title: "About",
                alias: "about",
                url: "/about",
            },
];
