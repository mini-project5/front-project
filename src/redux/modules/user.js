// Actions
// const LOAD = 'post/LOAD';
// const CREATE = 'post/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// 초기값
const initialState = {
    list: [
        { id: "아이디 1", password: "비밀번호 1", username: "닉네임 1" }
    ]
}


// Action Creators

// export function loadWidgets() {
//     return { type: LOAD };
// }

// export function loadPost(post_list) {
//     return { type: LOAD, post_list };
// }

// export function createPost(post) {
//     return { type: CREATE, post };
// }

// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//     return { type: REMOVE, widget };
// }


// middlewares


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // case "post/LOAD": {
        //     return { list: action.post_list }
        // }

        // case "post/CREATE": {
        //     const new_list = [...state.list];
        //     return { list: new_list };
        // }

        default:
            return state;
    }
}