const userGrid = document.getElementById('userGrid');
const users = [
  { name: 'User 1', profession: 'Front-end Developer', avatar: 'user1.jpg' },
  { name: 'User 2', profession: 'UX Designer', avatar: 'user2.jpg' }

];

users.forEach(user => {
  const userCard = document.createElement('div');
  userCard.classList.add('user-card');

  const userAvatar = document.createElement('div');
  userAvatar.classList.add('user-avatar');
  const avatarImg = document.createElement('img');
  avatarImg.src = user.avatar;
  avatarImg.alt = user.name;
  userAvatar.appendChild(avatarImg);

  const userName = document.createElement('h3');
  userName.textContent = user.name;

  const userProfession = document.createElement('p');
  userProfession.textContent = user.profession;

  userCard.appendChild(userAvatar);
  userCard.appendChild(userName);
  userCard.appendChild(userProfession);

  userGrid.appendChild(userCard);
});
