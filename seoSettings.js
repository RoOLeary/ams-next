const settings = {
    meta: {
      rootUrl: "https://ams-next.vercel.app",
      title: "App",
      description: "The app description goes here.",
      social: {
        graphic:
          "https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png",
        twitter: "@algarvemusicseries",
      },
    },
    routes: {
      authenticated: {
        pathAfterFailure: "/login",
      },
      public: {
        pathAfterFailure: "/documents",
      },
    },
  };
  
  export default settings;