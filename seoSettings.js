const settings = {
    meta: {
      rootUrl: "https://algarvemusicseries.com",
      title: "Algarve Music Series",
      description: "8th Edition | October 2023",
      social: {
        graphic:
          "https://algarvemusicseries.com/algarvemusicseries.jpeg",
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