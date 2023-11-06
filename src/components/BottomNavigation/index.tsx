import { MdBarChart } from "react-icons/md";

const BottomNavigation = () => {
  const routesList = [
    {
      route: "/amigos",
      icon: <MdBarChart className="h-[1.25rem] w-[1.25rem] text-icon_bottom" />,
      name: (
        <span className="text-icon_bottom text-bottom_navigation">Amigos</span>
      ),
    },
    {
      route: "/historico",
      icon: <MdBarChart className="h-[1.25rem] w-[1.25rem] text-icon_bottom" />,
      name: (
        <span className="text-icon_bottom text-bottom_navigation">
          Histórico
        </span>
      ),
    },
    {
      route: "/treinar",
      icon: (
        <div className="w-[2.5625rem] h-[2.5625rem] rounded-full bg-color-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="17"
            viewBox="0 0 30 19"
            fill="none"
          >
            <path
              d="M9.4255 9.46603C9.4255 6.78384 9.4255 4.10165 9.4255 1.41842C9.4255 0.397272 9.00092 0.00460398 7.90175 0.00460398C6.91857 0.00460398 5.93427 0.0191472 4.9511 0.000448765C3.92625 -0.0192885 3.38905 0.614382 3.39243 1.43608C3.4127 6.81396 3.41496 12.1919 3.38793 17.5687C3.38455 18.326 4.02874 19.0521 4.92745 18.9971C6.0041 18.9306 7.08976 18.9815 8.17204 18.9794C8.86015 18.9784 9.36919 18.5369 9.41649 17.9011C9.42663 17.7588 9.4255 17.6165 9.4255 17.4742C9.4255 14.8044 9.4255 12.1358 9.4255 9.46603Z"
              fill="white"
            />
            <path
              d="M26.0134 9.48947C26.0134 6.77027 25.9896 4.05004 26.0282 1.33084C26.0395 0.508231 25.4172 -0.0308306 24.5586 0.00136762C23.5263 0.0408365 22.4917 0.00863819 21.4571 0.0117542C20.5543 0.0148701 19.9944 0.513424 19.9933 1.33604C19.9898 6.76196 19.9898 12.1889 19.9933 17.6149C19.9933 18.399 20.5134 19.0472 21.523 18.9973C22.611 18.9433 23.7035 18.9848 24.7937 18.9828C25.4876 18.9807 26.0089 18.5039 26.01 17.8423C26.0157 15.0577 26.0123 12.2741 26.0123 9.48947H26.0134Z"
              fill="white"
            />
            <path
              d="M10.9342 6.90918V12.091H18.4812V6.90918H10.9342Z"
              fill="white"
            />
            <path
              d="M27.5393 3.45459V15.5337C27.8488 15.5337 28.151 15.5652 28.4484 15.5251C28.7437 15.485 29.0479 15.0287 29.0472 14.5581C29.0445 12.8092 29.0472 11.0603 29.0472 9.31135C29.0472 7.70563 29.0479 6.09896 29.0465 4.49325C29.0465 3.90041 28.7302 3.4565 28.3155 3.45554C28.064 3.45554 27.8124 3.45554 27.538 3.45554L27.5393 3.45459Z"
              fill="white"
            />
            <path
              d="M1.83303 3.47271C1.61675 3.46889 1.40048 3.48035 1.18487 3.45744C0.718947 3.40877 0.368502 3.99096 0.371172 4.60656C0.379182 6.6156 0.374509 8.62465 0.374509 10.6337C0.374509 11.8697 0.387192 13.1066 0.369169 14.3426C0.359824 15.0059 0.768343 15.6014 1.21024 15.5413C1.4165 15.5136 1.62543 15.5289 1.83303 15.5251C1.84638 15.5041 1.85906 15.484 1.87241 15.463C1.87441 12.3316 1.87708 9.20016 1.87842 6.06968C1.87842 5.22407 1.87441 4.37941 1.87241 3.5338C1.85906 3.5128 1.84638 3.49276 1.83303 3.47176V3.47271Z"
              fill="white"
            />
          </svg>
        </div>
      ),
      name: <span className="text-bottom_navigation">Treinar</span>,
    },
    {
      route: "/criar",
      icon: <MdBarChart className="h-[1.25rem] w-[1.25rem] text-icon_bottom" />,
      name: (
        <span className="text-icon_bottom text-bottom_navigation">Criar</span>
      ),
    },
    {
      route: "/conta",
      icon: <MdBarChart className="h-[1.25rem] w-[1.25rem] text-icon_bottom" />,
      name: (
        <span className="text-icon_bottom text-bottom_navigation">Conta</span>
      ),
    },
  ];

  return (
    <div className="h-[4.6875rem] w-full shadow-bottom_navigation fixed bottom-0 flex flex-row justify-around items-center">
      {routesList.map((route, index) => (
        <div
          key={route.route}
          className="flex flex-col items-center justify-center"
        >
          {route.icon}
          {route.name}
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
