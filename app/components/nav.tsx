"use client";

export let Nav = () => {
  return (
    <header className="header sticky top-0 z-30">
      <nav className="navbar container">
        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden lg:flex w-full pb-6 lg:order-1 lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        ></ul>
        <div className="order-0">
          <a className="navbar-brand block" href="/en/">
            <img
              decoding="async"
              className="img logo-light"
              width="160"
              height="32"
              src="https://www.codequoi.com/images/logo_hufcc91df488df48405f1d6e41c5385e5b_3110_320x0_resize_q80_h2_lanczos_2.webp"
              alt="ProjectsLand"
            />
          </a>
        </div>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          <button
            aria-label="search"
            className="border-border text-body hover:text-primary dark:border-darkmode-border mr-5 inline-block border-r pr-5 text-xl dark:text-white dark:hover:text-darkmode-body"
            data-target="search-modal"
          >
            <i className="fa-solid fa-search"></i>
          </button>

          <select className="mr-5 pl-2 py-1 dark:bg-darkmode-theme-light rounded">
            <option id="fr" value="/">
              🇫🇷 Français
            </option>

            <option id="en" value="/en/">
              🇺🇸 English
            </option>
          </select>

          <div className="theme-switcher mr-5">
            <input id="theme-switcher" data-theme-switcher="" type="checkbox" />
            <label htmlFor="theme-switcher">
              <span className="sr-only">theme switcher</span>
              <span>
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 dark:opacity-0"
                  viewBox="0 0 56 56"
                  fill="#fff"
                  height="16"
                  width="16"
                >
                  <path d="M30 4.6c0-1-.9-2-2-2a2 2 0 0 0-2 2v5c0 1 .9 2 2 2s2-1 2-2Zm9.6 9a2 2 0 0 0 0 2.8c.8.8 2 .8 2.9 0L46 13a2 2 0 0 0 0-2.9 2 2 0 0 0-3 0Zm-26 2.8c.7.8 2 .8 2.8 0 .8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9 0-.7.8-.7 2.1 0 3ZM28 16a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12Zm23.3 14c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 0 0-2 2c0 1.1 1 2 2 2ZM4.7 26a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2Zm37.8 13.6a2 2 0 0 0-3 0 2 2 0 0 0 0 2.9l3.6 3.5a2 2 0 0 0 2.9 0c.8-.8.8-2.1 0-3ZM10 43.1a2 2 0 0 0 0 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1 0-2.9-.8-.8-2-.8-2.9 0Zm20 3.4c0-1.1-.9-2-2-2a2 2 0 0 0-2 2v4.9c0 1 .9 2 2 2s2-1 2-2Z"></path>
                </svg>

                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 dark:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  height="16"
                  width="16"
                >
                  <path
                    fill="#000"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.2 2.2c1-.4 2 .6 1.6 1.5-1 3-.4 6.4 1.8 8.7a8.4 8.4 0 0 0 8.7 1.8c1-.3 2 .5 1.5 1.5v.1a10.3 10.3 0 0 1-9.4 6.2A10.3 10.3 0 0 1 3.2 6.7c1-2 2.9-3.5 4.9-4.4Z"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};
