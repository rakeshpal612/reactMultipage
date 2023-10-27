import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
// import aipdata from "./apidata.json";

const AppContext = createContext();

// const API = aipdata;

const apidata = [
  {
    id: 1,
    title: "Web Development",
    image: "./images/services1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
  },
  {
    id: 2,
    title: "App Development",
    image: "./images/services2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
  },
  {
    id: 3,
    title: "Software Development",
    image: "./images/services3.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: "./images/services1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
  },
  {
    id: 5,
    title: "Graphic Desginer",
    image: "./images/services2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
  },
  {
    id: 6,
    title: "Thapa Codefest",
    image: "./images/services3.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. ",
  },
];

const initialState = {
  name: "",
  image: "",
  services: apidata,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "THE CODER",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "RAKESH AK PAL",
        image: "./images/about1.svg",
      },
    });
  };
  // console.log(apidata);

  // const getServices = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //     dispatch({
  //       type: "GET_SERVICES",
  //       payload: data,
  //     });
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getServices(apidata);
  // }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
