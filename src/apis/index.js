import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async(url, {body, ...customConfig})=>{
    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const headers = {
        'content-type': 'application/json',
    }

    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }


    if(body){
        config.body = JSON.stringify(body);
    }

    try{
        const response = await fetch(url, config);
        const data = await response.json();
        // console.log(data);

        if(data.success){
            return {
                data: data.data,
                success: true,
                message: data.message,
                liked: data.liked
            };
        }

        // throw new Error(data.message);
        return {
            message:data.message,
            success: false
        }

    }catch(error){
        // console.error(error);
        return {
            message: error.message,
            success: false
        }
    }
}

const login = (username, password)=>{
    return customFetch(API_URLS.login(), {
        method: "POST",
        body: {username, password,}
    });
}

const me = (username, password)=>{
    return customFetch(API_URLS.me(), {
        method: "GET"
    });
}

const checkUsername = (username)=>{
    return customFetch(API_URLS.usernameExists(username), {
        method: "GET"
    });
}
const checkMobile = (mobile)=>{
    return customFetch(API_URLS.mobileExists(mobile), {
        method: "GET"
    });
}

const register = (body)=>{
    return customFetch(API_URLS.register(), {
        method: "POST",
        body,
    });
}

const post = async(formData)=>{
   const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  try{
    const response = await fetch(API_URLS.post(), {
        method: 'POST',
        body: formData,
        headers: {
            Authorization:`Bearer ${token}`
        }
       });
       let data = await response.json();
       if(data.success){
        return {
            success: true,
            data: data.post
        };
    }

    // throw new Error(data.message);
    return {
        message:data.message,
        success: false
    }
    }catch(err){
     // console.error(error);
     return {
        message: err.message,
        success: false
    }
}
}

const getPostById = async(post_id)=>{
    return customFetch(API_URLS.getPostById(post_id), {
        method: "GET"
    });
}

const getPosts = async(page, limit)=>{
    return customFetch(API_URLS.getPosts(page, limit), {
        method: "GET"
    });
}

const makeComment = async(post_id, text)=>{
   return customFetch(API_URLS.makeComment(), {
    method: "POST",
    body: {post_id, text,}
   })
}
const getCommentById = async(comment_id)=>{
    return customFetch(API_URLS.getCommentById(comment_id), {
        method: "GET"
    });
}
const makeCommentReply = async(post_id, comment_id, text)=>{
    return customFetch(API_URLS.makeCommentReply(), {
        method: "POST",
        body: {post_id, comment_id, text}
    })
}

const getCommentReplyById = async(comment_reply_id)=>{
    return customFetch(API_URLS.getCommentReplyById(comment_reply_id), {
        method: "GET"
    });
}

const toggleLike = async(like_target_type, like_target_id)=>{
    return customFetch(API_URLS.toggleLike(), {
        method: "POST",
        body: {like_target_type, like_target_id,}
    });
}
   


export {login, me, checkUsername, checkMobile, register, post, getPosts, makeComment, makeCommentReply, getPostById, getCommentById, getCommentReplyById, toggleLike};