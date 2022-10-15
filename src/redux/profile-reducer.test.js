import profileReducer, {addPost} from './profile-reducer'
let state = {
  posts: [
    {id: 1, message: 'Hello', likesCount: 12},
    {id: 2, message: 'How are you?', likesCount: 22},
    {id: 3, message: 'What do you do?', likesCount: 32},
  ]
}
test('length should be correct', () => {
  let action = addPost("Hello to everybody")
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(4);
}); 
test('post text should be correct', () => {
  let action = addPost('Hello to everybody')
  let newState = profileReducer(state, action)
  expect(newState.posts[0].message).toBe('Hello to everybody');
});

