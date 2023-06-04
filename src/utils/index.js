const API_ROOT = "http://backend.codecommunity.in/api";

export const API_URLS = {
    login: ()=> `${API_ROOT}/users/login`,
    register: ()=> `${API_ROOT}/users/register`,
    me: ()=> `${API_ROOT}/users/me`,
    profile: (username) => `${API_ROOT}/users/${username}`,
    toggleFollow: (id)=> `${API_ROOT}/users/toggleFollow/${id}`,
    toggleBlock: (id)=> `${API_ROOT}/users/toggleBlock/${id}`,
    blockList: ()=> `${API_ROOT}/users/blockList`,
    followList: (id)=> `${API_ROOT}/users/followList/${id}`,
    updateProfile: ()=> `${API_ROOT}/users/updateProfile`,
    updateAvatar: (id)=> `${API_ROOT}/users/updateAvatar/${id}`,
    getPosts: (page, limit)=> `${API_ROOT}/posts/getPosts?page=${page}&limit=${limit}`,
    getUserPosts: (id)=> `${API_ROOT}/posts/getUserPosts/${id}`,
    post: ()=> `${API_ROOT}/posts/post`,
    editPost: ()=> `${API_ROOT}/posts/editPost`,
    deletePost: (id)=> `${API_ROOT}/posts/deletePost/${id}`,
    makeComment: ()=> `${API_ROOT}/comment/makeComment`,
    editComment: ()=> `${API_ROOT}/comment/editComment`,
    deleteComment: (id)=> `${API_ROOT}/comment/deleteComment/${id}`,
    makeCommentReply: ()=> `${API_ROOT}/commentReply/makeCommentReply`,
    editCommentReply: ()=> `${API_ROOT}/commentReply/editCommentReply`,
    deleteCommentReply: (id)=> `${API_ROOT}/commentReply/deleteCommentReply/${id}`,
    getForumQs: (page, limit)=> `${API_ROOT}/forumQ/getForumQs?page=${page}&limit=${limit}`,
    postForumQ: ()=> `${API_ROOT}/forumQ/postForumQ`,
    editForumQ: ()=> `${API_ROOT}/forumQ/editForumQ`,
    deleteForumQ: (id)=> `${API_ROOT}/forumQ/deleteForumQ/${id}`,
    postForumA: ()=> `${API_ROOT}/forumA/postForumA`,
    editForumA: ()=> `${API_ROOT}/forumA/editForumA`,
    deleteForumA: ()=> `${API_ROOT}/forumA/deleteForumA/${id}`,
    emailExists: (email)=> `${API_ROOT}/validate/emailExists/${email}`,
    mobileExists: (mobile)=> `${API_ROOT}/validate/mobileExists/${mobile}`,
    usernameExists: (username)=> `${API_ROOT}/validate/usernameExists/${username}`,
    toggleLike: ()=> `${API_ROOT}/like/toggleLike`
}

export const  LOCALSTORAGE_TOKEN_KEY = `__code_token_key__`;