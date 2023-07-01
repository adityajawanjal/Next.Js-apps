import axios from "axios";

export const url = `http://localhost:1337`;

const token = `1df26b5387c4471a7d10263f89f96b68f441365af086737db264d026a7f0071677955200bdb69208d28c10c3bba745a461b1bde3ccd0e6ba24f6092162c8c5ed4da819175ee278e68d497f46d4a37ee93c5b9fe71554be4f930d426921cf0098e94ccbdf08b1591ee0a3955d70030d27fe7c697308a0c4ad289e602534e42108`

const API = axios.create({
    baseURL:url,
    headers:{
        Authorization:`Bearer ${token}`
    }
})

export const fetchCategories = async () => API.get(`/api/categories?populate=*`);
export const fetchArticles = async () => API.get(`/api/articles?populate=*`);

export const fetchSingleArticle = async (value) => API.get(`api/articles?filters[Slug][$eq]=${value}&populate=*`);
