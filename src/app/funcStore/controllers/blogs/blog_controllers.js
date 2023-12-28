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

export const getBlog = async (blog_id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/api/blogs/single/${blog_id}`
    );
    if (res) {
      return res;
    }
  } catch (error) {
    console.error(error);
  }
};


export const deleteBlog = async (blog_id) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER}/api/blogs/${blog_id}`
    );
    if (res) {
      return res;
    }
  } catch (error) {
    console.error(error);
  }
};