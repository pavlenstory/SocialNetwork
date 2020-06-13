import profileReducer, {addPost, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts: [
        {post: "Hi", id: 1, likesCount: 10},
        {post: "bla 2", id: 2, likesCount: 20},
    ]
}

it("array length should be grown", () => {
    // 1.test data
    let action = addPost("hello");
    // 2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
})


it("message should be added", () => {
    // 1.test data
    let action = addPost("hello");
    // 2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[2].likesCount).toBe(0);
})

it("the array should decrease", () => {
    // 1.test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(1);
})

it("after removal, the length of the array does not change if the ID is not correct", () => {
    // 1.test data
    let action = deletePost(100);
    // 2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(2);
})

