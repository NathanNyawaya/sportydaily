import axios from "axios";


export const getBlogs = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/api/blogs/all`
      );
      if (res) {
        return res;
      }
    } catch (error) {
      console.error(error);
    }
  };


export const getBlog = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/api/blogs/single`
    );
    if (res) {
      return res;
    }
  } catch (error) {
    console.error(error);
  }
};